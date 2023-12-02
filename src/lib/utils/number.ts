export const formatMoney = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 6
  }).format(number);
};

export const formatNumber = (number: number, maxDecimals = 6) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: maxDecimals,
  }).format(number);
};
