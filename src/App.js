import React, { Component } from 'react';
import styled from 'styled-components';

import { store } from './store/store';

import Menu from './Menu';

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
    const store = this.props.store;    
    const dispatchType = (store.getState().menuApp.menuState.visible) ? 'MENU_CLOSE' : 'MENU_OPEN';

    store.dispatch({type: dispatchType});
  }

  render() {
    return (
      <OpenMenuButtonStyled onClick={this.handleClick}>
        <i className="fas fa-bars" />
      </OpenMenuButtonStyled>
    )
  }
}

function App() {
  return (
    <div>
      <OpenMenuButton store={store} />
      <Menu store={store} />
    </div>
  );
}

export default App;
