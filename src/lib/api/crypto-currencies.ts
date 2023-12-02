export async function getCryptoCurrencies() {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_PRO_COIN_MARKET_CAP_API
      }/v1/cryptocurrency/listings/latest?limit=2560`,
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": String(
            import.meta.env.VITE_PRO_COIN_MARKET_CAP_KEY
          ),
        },
      }
    );
    const { data } = await res.json();
    let coins = data.map((coin) => {
      return {
        id: coin.id,
        symbol: coin.symbol,
        price: coin.quote.USD.price,
        marketCap: coin.quote.USD.market_cap,
      };
    });
    const coinsObj = {};

    for (let i = 0; i < coins.length; i++) {
        coinsObj[coins[i].id] = coins[i];
    }
    return coinsObj;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
