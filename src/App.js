import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";
import { openMenu, closeMenu } from './store/menu.actions';

import Menu from './Menu';

import './App.css';

const OpenMenuButtonStyled = styled.div`
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
`

class OpenMenuButton extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onOpenMenu();
  }

  render() {
    return (
      <OpenMenuButtonStyled onClick={this.handleClick}>
        <i className="fas fa-bars" />
      </OpenMenuButtonStyled>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOpenMenu: () => { dispatch(openMenu()); }
  }
}

OpenMenuButton = connect(
  null,
  mapDispatchToProps
)(OpenMenuButton);

function App() {
  return (
    <div>
      <OpenMenuButton />
      <Menu />
    </div>
  );
}

export default App;
