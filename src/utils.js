import avatar from './images/avatar.png';
import { keyframes } from 'styled-components';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const theme = {
  color: {
    main: '#EE5F63',
    text: '#FFF',
    border: '#FFF',
    borderDim: '#F18990'
  }
}

export const slideIn = keyframes`
  from {
    top: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

/**
 *
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
    console.log(e)
  }
};

/**
 *
 */
export function getUserData() {
  return {
    name: 'Dominik',
    surname: 'Biel',
    balance: 1500,
    avatar: avatar
  }
}