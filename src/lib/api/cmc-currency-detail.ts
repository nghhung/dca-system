export const getCMCCurrencyDetail = async (slug: string) => {
  if (slug === 'WOO') {
    slug = 'wootrade'
  }
  const res = await fetch(
    `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail?slug=${slug}`
  );

  const data = await res.json();
  return data;
};
