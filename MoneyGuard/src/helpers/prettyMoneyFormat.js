export const prettyMoneyFormat = number => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  }).format(Math.abs(number));
};

// Çıktı: "₺1.234,56"
