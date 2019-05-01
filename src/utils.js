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

/**
 * Simulating getting menu items from different source
 */
export function getMenuItems() {
  const menuListItems = [
    { name: 'home', label: 'Home', link: '#', icon: '', group: 1, order: { tablet: -1, desktop: 1 } },
    { name: 'flights', label: 'Flights', link: '#', icon: '', group: 1, order: { tablet: -1, desktop: 2 } },
    
    { name: 'about', label: 'About Us', link: '#', icon: 'fa-question-circle', group: 2, order: { tablet: 6, desktop: 3 } },
    { name: 'faq', label: 'FAQ', link: '#', icon: 'fa-info-circle', group: 2, order: { tablet: 7, desktop: 4} },
    { name: 'support', label: 'Support', link: '#', icon: 'fa-life-ring', group: 2, order: { tablet: 3, desktop: 5 } },
    { name: 'contact', label: 'Contact Us', link: '#', icon: 'fa-phone', group: 2, order: { tablet: 4, desktop: 6 } },
    
    { name: 'profile', label: 'Profile', link: '#', icon: 'fa-user-circle', group: 3, order: { tablet: 0, desktop: -1 } },
    { name: 'bookings', label: 'My Bookings', link: '#', icon: 'fa-plane', group: 3, order: { tablet: 1, desktop: -1 } },
    { name: 'payments', label: 'My Payments', link: '#', icon: 'fa-credit-card', group: 3, order: { tablet: 2, desktop: -1 } },
    { name: 'logout', label: 'Log Out', link: '#', icon: 'fa-sign-out-alt', group: 3, order: { tablet: 5, desktop: -1 } },
    { name: 'resume', label: 'Resume Application', link: '#', icon: '', group: 3, order: { tablet: -1, desktop: -1 } }
  ];
  
  const subMenuListItems = [
    { name: 'profile', label: 'Profile', link: '#', icon: 'fa-user-circle', group: 3, order: { tablet: -1, desktop: 7 } },
    { name: 'bookings', label: 'My Bookings', link: '#', icon: 'fa-plane', group: 3, order: { tablet: -1, desktop: 8 } },
    { name: 'payments', label: 'My Payments', link: '#', icon: 'fa-credit-card', group: 3, order: { tablet: -1, desktop: 9 } },
    { name: 'logout', label: 'Log Out', link: '#', icon: 'fa-sign-out-alt', group: 3, order: { tablet: -1, desktop: 10 } },
    { name: 'resume', label: 'Resume Application', link: '#', icon: '', group: 3, order: { tablet: -1, desktop: 11 } }
  ];
  
  return {
    menuListItems,
    subMenuListItems
  }
}