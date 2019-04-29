import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from './UserInfo';

import logo from './awaymoFullWhite.svg';

const mainColor = '#EE5F63';
const textColor = '#FFF';
const borderColor = '#F18990';

const designM = '700px';

const StyledMenu = styled.div`
  display: ${props => (props.visible) ? `grid` : `none`  };
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
  
  @media (min-width: 700px) {}
`

const Header = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  margin: 0 15px;

  border-bottom: 2px solid ${borderColor};

  i {
    cursor: pointer;
    font-size: 1.15rem;
  }
  
  @media (min-width: ${designM}) {
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
  margin: 0 15px;
  
  border-top: 1px solid ${borderColor}
  
  text-align: center;
  font-size: 1.35rem;
  
  .menu--footer__contact-data { display: none; }
  
  @media (min-width: ${designM}) {
    font-size: 1.15rem;
    padding: 15px 0 50px 0;

    .menu--footer__contact-data { display: block; }
  }
`

const OpenMenuButton = styled.div`
background: black; height: 13px;`

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

class MenuListItem extends Component {
  render() {
    return <div>MenuListItem</div>
  }
}

class MenuList extends Component {
  render() {
    return <MenuListItem />
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
    
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  
  toggleVisibility() {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div>
        <OpenMenuButton onClick={this.toggleVisibility}>--</OpenMenuButton>
        <StyledMenu visible={this.state.visible}>
          <MenuHeader toggleVisibility={this.toggleVisibility}/>
          <UserInfo />
          <MenuList />
          <MenuFooter />
        </StyledMenu>
      </div>
    )
  }
}

export default Menu; 