// Função para formatação do preço do produto em dólar
export const { format: formatPrice } = new Intl.NumberFormat('eu-US', {
  style: 'currency',
  currency: 'USD',
});
