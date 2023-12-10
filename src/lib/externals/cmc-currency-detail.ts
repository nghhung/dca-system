export const getCMCCurrencyDetail = async (slug: string) => {
  if (slug === 'WOO') {
    slug = 'wootrade'
  }
  const res = await fetch(
    `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail?slug=${slug}`
  );

  const json = await res.json();

  if (!json.data) {
    throw new Error("No data from CoinMarketCap!");
  }

  return json;
};
