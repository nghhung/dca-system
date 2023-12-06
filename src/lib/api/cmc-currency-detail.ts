export const getCMCCurrencyDetail = async (slug: string) => {
  if (slug === 'woo') {
    slug = 'woo-network'
  }
  const res = await fetch(
    `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail?slug=${slug}`
  );

  const data = await res.json();
  return data;
};
