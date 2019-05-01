import avatar from './images/avatar.png';

// helper to devine design breakpoints
export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// helper object for easier theme adjustments
export const theme = {
  color: {
    main: '#EE5F63',
    text: '#FFF',
    border: '#FFF',
    borderDim: '#F18990'
  }
};

/**
 * Function responsible for formating given number to a nice looking price string
 *
 * @param {number} amount The number we want to format
 * @param {int}    decimalCount Information on how much numbers we want to see after the decimal / default 2
 * @param {string} decimal String that we want to use for a decimal symbol / default .
 * @param {string} thousands String that we want to use as thousands limiter / default ,
 * @param {string} currenct String of the currency we want to use / default £
 *
 * @return {string} Formater price string
 *
 * @since 2019-04-30
 * @author Andrzej Sikorski
 */
export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",", currency = '£') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return currency + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
  }
};

/**
 * A dummy function simulating incoming data user from somewhere
 */
export function getUserData() {
  return {
    name: 'Dominik',
    surname: 'Biel',
    balance: 1500,
    avatar: avatar
  };
}