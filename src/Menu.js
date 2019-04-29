import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from './UserInfo';

import logo from './awaymoFullWhite.svg';

const mainColor = '#EE5F63';
const textColor = '#FFF';
const borderColor = '#F18990';

const StyledMenu = styled.div`
  display: ${props => (props.visible) ? `grid` : `none`  };
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto;
  grid-template-areas: 
    "header"
    "user"
    "menu"
    "footer";
  
  color: ${textColor};
  background: ${mainColor};
  
  @media (min-width: 700px) {}
`

const Header = styled.div`
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
  
  @media (min-width: 700px) {
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
        <div></div>
        <img src={logo} alt="logo"/>
        <i onClick={this.handleClick} className="fas fa-times"></i>
      </Header>
    )
  }
}

class MenuFooter extends Component {
  render() {
    return <div>Footer</div>
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
        <div onClick={this.toggleVisibility}>Menu</div>
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