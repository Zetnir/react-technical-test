// external components
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { openMenu, closeMenu } from './store/menu.actions';

// internal components
import UserInfo from './UserInfo';

// utilities
import { sizes, theme, getMenuItems } from './utils';
import { slideIn, jumpOut } from './animations';
import logo from './images/awaymoFullWhite.svg';

// helper variables
const animationTime = 750; // ms

/**
 * Main container styles
 */
const StyledMenu = styled.div`
  display: ${props => (props.visible) ? `grid` : `none` };
  grid-template-rows: max-content min-content auto auto;
  grid-template-columns: auto;
  grid-template-areas: 
  "header"
  "user"
  "menu"
  "footer";
  
  position: fixed;
  top: -100%;
  
  width: 100%;
  min-width: 300px;
  height: 100%;

  color: ${theme.color.text};
  background: ${theme.color.main};
  
  a {
    color: ${theme.color.text}
    text-decoration: none;
  }
  
  &.slide-enter {
    animation: ${slideIn} infinite ${animationTime}ms ease;
  }
  
  &.slide-enter-done {
    top: 0;
  }
  
  &.slide-exit {
    display: grid;
    
    animation: ${jumpOut} infinite ${animationTime}ms ease;
  }
  
  &.slide-exit-done {
    display: none;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    grid-gap: 20px;
    grid-template-columns: .8fr 1fr 1fr;
    grid-template-rows: max-content max-content 1fr 3fr;
    grid-template-areas: 
      "header header header"
      "menu user ."
      "menu submenu ."
      "footer footer footer";
  }
`

/**
 * MenuHeader
 */
const Header = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24.5px 0;
  margin: 0 20px;

  border-bottom: 1px solid ${theme.color.borderDim};

  div:before {
    font-family: "Font Awesome 5 Free";
    font-size: 1.2rem;
    font-weight: 900;
    content: "\f00d";
    visibility: hidden;
  }

  img {
    height: 31px;
    margin-right: -38px;
  }

  i {
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    padding: 19px 0;
    margin: 0 16px;
    
    border-bottom: 2px solid ${theme.color.border};
    
    img {
      height: 26px;
      margin-right: -38px;
    }
  }
`

class MenuHeader extends Component {
  render() {
    return (
      <Header>
        <div />
        <img src={logo} alt="logo" />
        <i onClick={this.props.onCloseMenu.bind(this)} className="fas fa-times" />
      </Header>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseMenu: () => { 
      dispatch(closeMenu());
    }
  }
}

MenuHeader = connect(
  null,
  mapDispatchToProps
)(MenuHeader);

/**
 * MenuFooter
 */
const Footer = styled.div`
  grid-area: footer;
  padding: 21px 0 7px 0;
  margin: 0 20px;
  
  border-top: 1px solid ${theme.color.borderDim}
  
  text-align: center;
  font-size: 1.5rem;
  align-self: end;
  
  .menu--footer__contact-data { display: none; }
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 1.2rem;
    padding: 15px 0 50px 0;

    .menu--footer__contact-data { display: block; }
  }
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

/**
 * MenuListItem
 */
const MenuListItemStyled = styled.div`
  padding: 22.5px 0;
  
  display: ${props => props.order.tablet === -1 ? 'none' : 'flex'};
  align-items: center;
  order: ${props => props.order.tablet};
  
  border-top: 1px solid ${theme.color.borderDim};
  
  font-size: 1.3rem;
  
  i {
    font-size: 1.35rem;
    margin-right: 10px;
  }
  
  /* first item has no border*/
  &.menu-item__name-profile {
    border-top-width: 0;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    display: ${props => props.order.desktop === -1 ? 'none' : 'block'};
    border: 0;
    padding: 0;
    
    order: ${props => props.order.desktop};
    
    font-size: 1.75rem;
    font-weight: 900;
    
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

/**
 * MenuList
 */
const MenuListStyled = styled.div`
  grid-area: ${props => props.type === 'sub' ? 'submenu' : 'menu'};
  margin: 0 20px;
  
  display: ${props => props.type === 'sub' ? 'none' : 'flex'};
  flex-direction: column;
  
  @media (min-width: ${sizes.tablet}px) {
    display: ${props => props.type === 'sub' && 'flex'};
    margin-left: 0;
    margin-left: ${props => props.type !== 'sub' && '16px'};
    
    font-weight: 500;
  }
`

class MenuList extends Component {
  constructor() {
    super();
    const {menuListItems, subMenuListItems} = getMenuItems();
    
    this.menuListItems = menuListItems;
    this.subMenuListItems = subMenuListItems;
  }
  
  render() {    
    const list = this.props.type === 'sub' ? this.subMenuListItems : this.menuListItems;

    return (
      <MenuListStyled type={this.props.type}>
        {list.map((itemData, index) => {
          return <MenuListItem item={itemData} key={index}/>
        })}
      </MenuListStyled>
    );
    
  }
}

// Main component
class Menu extends Component {
  constructor(props) {
    super(props);

    // event functions
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }
  
  _handleKeyDown(event) {

    if(this.props.visible === false) return;

    switch (event.keyCode) {
      case 27: // escape key
        this.props.onCloseMenu();
        break;
      default:
        break;
    }
  }

  render() {
    return (
        <CSSTransition
          in={this.props.visible}
          timeout={animationTime}
          classNames="slide"
        >
            <StyledMenu visible={this.props.visible}>
              <MenuHeader />
              <UserInfo />
              <MenuList />
              <MenuList type={'sub'}/>
              <MenuFooter />
            </StyledMenu>
        </CSSTransition>
    )
  }
}

const getMenuVisibility = (visible) => {
  return visible;
}

const mapStateToProps = state => {
  return {
    visible: getMenuVisibility(state.menuApp.menuState.visible)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);