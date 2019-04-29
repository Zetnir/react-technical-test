import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from './UserInfo';

const mainColor = '#EE5F63';
const textColor = '#FFF';

const StyledMenu = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto;
  grid-template-areas: 
    "header"
    "user"
    "menu"
    "footer";
  
  color: ${textColor};
  background: ${mainColor};
`

class MenuHeader extends Component {
  render() {
    return <div>Header</div>
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
  render() {
    return (
      <StyledMenu>
        <MenuHeader />
        <UserInfo />
        <MenuList />
        <MenuFooter />
      </StyledMenu>
    )
  }
}

export default Menu; 