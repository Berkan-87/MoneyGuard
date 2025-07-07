export const getformatNumber = number =>
  number
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/\s/g, ' ')
    .replace(',', '.');


// helpers/getformatNumber.js

export const getformattedBalance = balance =>
  balance.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
