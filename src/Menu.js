import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { sizes, slideIn } from './utils';

import UserInfo from './UserInfo';

import logo from './images/awaymoFullWhite.svg';

const mainColor = '#EE5F63';
const textColor = '#FFF';
const borderColor = '#F18990';

const StyledMenu = styled.div`
  position: fixed;
  top: -100%;
  width: 100%;
  min-width: 330px;
  height: 100%;
  
  &.slide-appear,
  &.slide-enter {
    animation: ${slideIn} infinite 1s ease-out;
  }
  
  &.slide-exit {
    animation: ${slideIn} infinite 1s ease-in;
    animation-direction: reverse;
  }

  /* display: ${props => (props.visible) ? `grid` : `none` }; */
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: auto;
  grid-template-areas: 
    "header"
    "user"
    "menu"
    "footer";
  
  color: ${textColor};
  background: ${mainColor};
  
  a {
    color: ${textColor}
    text-decoration: none;
  }
  
  &.slide-enter-done {
    top: 0;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    grid-gap: 15px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: max-content max-content 1fr 3fr;
    grid-template-areas: 
      "header header header"
      "menu user ."
      "menu submenu ."
      "footer footer footer";
  }
`

const Header = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0; /* height is 81px */
  margin: 0 20px;

  border-bottom: 1px solid ${borderColor};

  img {
    height: 25px;
    margin-right: -38px;
  }

  i {
    cursor: pointer;
    font-size: 1.2rem;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    border-bottom: 3px solid #FFF;
  }
`

class MenuHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.toggleVisibility();
  }

  render() {
    return (
      <Header>
        <div />
        <img src={logo} alt="logo"/>
        <i onClick={this.handleClick} className="fas fa-times"></i>
      </Header>
    )
  }
}

const Footer = styled.div`
  grid-area: footer;
  padding: 20px 0 5px 0;
  margin: 0 20px;
  
  border-top: 1px solid ${borderColor}
  
  text-align: center;
  font-size: 1.35rem;
  align-self: end;
  
  .menu--footer__contact-data { display: none; }
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 1.15rem;
    padding: 15px 0 50px 0;

    .menu--footer__contact-data { display: block; }
  }
`

const OpenMenuButton = styled.div`
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
`

class MenuFooter extends Component {
  render() {
    const contactUsLabel = `We're here to help`; // possible translation change here?
    const phoneNumber = `+44 (0) 20 8050 3459`;
    const email = `support@awaymo.com`;

    return (
      <Footer>
        <div>{contactUsLabel}</div>
        <a className="menu--footer__contact-data" href={`callto:${phoneNumber}`} target="_blank" rel="noopener noreferrer">{phoneNumber}</a>
        <a className="menu--footer__contact-data" href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
      </Footer>
    )
  }
}

const MenuListItemStyled = styled.div`
  padding: 15px 0;
  
  display: ${props => props.order.tablet === -1 ? 'none' : 'flex'};
  align-items: center;
  order: ${props => props.order.tablet};
  
  border-top: 1px solid ${borderColor};
  
  i {
    font-size: 1.1rem;
    margin-right: 10px;
  }
  
  /* first item has no border*/
  &.menu-item__name-profile {
    padding-top: 0;
    border-top-width: 0;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    display: ${props => props.order.desktop === -1 ? 'none' : 'block'};
    border: 0;
    padding: 0;
    
    order: ${props => props.order.desktop};
    
    font-size: 1.35rem;
    
    i {
      display: none;
    }
    
    &.menu-item__name-flights {
      margin-bottom: 15px;
    }
  }
`

class MenuListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <MenuListItemStyled group={item.group} order={item.order} className={`menu-item__name-${item.name}`}>
        <a href={item.link} alt={item.name}>
          <i className={`fas ${item.icon}`} />
          <span>{item.label}</span>
        </a>
      </MenuListItemStyled>
    )
  }
}

const MenuListStyled = styled.div`
  grid-area: ${props => props.type === 'sub' ? 'submenu' : 'menu'};
  margin: 0 20px;
  
  display: ${props => props.type === 'sub' ? 'none' : 'flex'}
  flex-direction: column;
  
  @media (min-width: ${sizes.tablet}px) {
    display: ${props => props.type === 'sub' && 'flex'}
    margin: 0;
    
    font-weight: 500;
  }
`

class MenuList extends Component {
  render() {
    const menuListItems = [
      { name: 'home', label: 'Home', link: '#', icon: '', group: 1, order: { tablet: -1, desktop: 0 } },
      { name: 'flights', label: 'Flights', link: '#', icon: '', group: 1, order: { tablet: -1, desktop: 0 } },
      
      { name: 'about', label: 'About Us', link: '#', icon: 'fa-question-circle', group: 2, order: { tablet: 6, desktop: 0 } },
      { name: 'faq', label: 'FAQ', link: '#', icon: 'fa-info-circle', group: 2, order: { tablet: 7, desktop: 0 } },
      { name: 'support', label: 'Support', link: '#', icon: 'fa-life-ring', group: 2, order: { tablet: 3, desktop: 0 } },
      { name: 'contact', label: 'Contact Us', link: '#', icon: 'fa-phone', group: 2, order: { tablet: 4, desktop: 0 } },
      
      { name: 'profile', label: 'Profile', link: '#', icon: 'fa-user-circle', group: 3, order: { tablet: 0, desktop: -1 } },
      { name: 'bookings', label: 'My Bookings', link: '#', icon: 'fa-plane', group: 3, order: { tablet: 1, desktop: -1 } },
      { name: 'payments', label: 'My Payments', link: '#', icon: 'fa-credit-card', group: 3, order: { tablet: 2, desktop: -1 } },
      { name: 'logout', label: 'Log Out', link: '#', icon: 'fa-sign-out-alt', group: 3, order: { tablet: 5, desktop: -1 } },
      { name: 'resume', label: 'Resume Application', link: '#', icon: '', group: 3, order: { tablet: -1, desktop: -1 } }
    ];
    
    const subMenuListItems = [
      { name: 'profile', label: 'Profile', link: '#', icon: 'fa-user-circle', group: 3, order: { tablet: -1, desktop: 0 } },
      { name: 'bookings', label: 'My Bookings', link: '#', icon: 'fa-plane', group: 3, order: { tablet: -1, desktop: 0 } },
      { name: 'payments', label: 'My Payments', link: '#', icon: 'fa-credit-card', group: 3, order: { tablet: -1, desktop: 0 } },
      { name: 'logout', label: 'Log Out', link: '#', icon: 'fa-sign-out-alt', group: 3, order: { tablet: -1, desktop: 0 } },
      { name: 'resume', label: 'Resume Application', link: '#', icon: '', group: 3, order: { tablet: -1, desktop: 0 } }
    ]
    
    let list = this.props.type === 'sub' ? subMenuListItems : menuListItems;

    return (
      <MenuListStyled type={this.props.type}>
        {list.map((itemData, index) => {
          return <MenuListItem item={itemData} key={index}/>
        })}
      </MenuListStyled>
    );
    
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  
  toggleVisibility() {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div>
        <OpenMenuButton onClick={this.toggleVisibility}><i className="fas fa-bars"></i></OpenMenuButton>
        <CSSTransition
          in={this.state.visible}
          appear={true}
          timeout={1000}
          classNames="slide"
        >
            <StyledMenu visible={this.state.visible}>
              <MenuHeader toggleVisibility={this.toggleVisibility}/>
              <UserInfo />
              <MenuList />
              <MenuList type={'sub'}/>
              <MenuFooter />
            </StyledMenu>
        </CSSTransition>
      </div>
    )
  }
}

export default Menu; 

// 