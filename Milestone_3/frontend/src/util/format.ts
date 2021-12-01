export const { format: formatPrice } = new Intl.NumberFormat('eu-US', {
  style: 'currency',
  currency: 'USD',
});
