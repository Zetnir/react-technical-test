export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",", currency = '£') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return currency + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

export function getUserData() {
  return {
    name: 'Dominik',
    balance: 1500,
    avatar: 'https://cdn1.iconfinder.com/data/icons/animal-face-avatars-1/90/2-128.png'
  }
}