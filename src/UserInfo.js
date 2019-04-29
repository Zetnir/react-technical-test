import React, { Component } from 'react';
import styled from 'styled-components';

const avatarSquare = 50;

const UserInfoStyled = styled.div`
  padding 25px 0;
  text-align: center;
`

const UserInfoAvatart = styled.img`
  width: ${avatarSquare}px;
  height: ${avatarSquare}px;
`

const UserInfoName = styled.div`

`

const UserInfoBalance = styled.div`

`

class UserInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      balance: 0,
      avatar: ''
    }
  }
  
  componentDidMount() {
    const userData = getData();
    
    this.setState(userData);
  }

  render() {
    const balanceLabel = `Available Balance`;
    
    return (
      <UserInfoStyled>
        <UserInfoAvatart src={this.state.avatar} />
        <UserInfoName>{this.state.name}</UserInfoName>
        <UserInfoBalance>
          <div>{balanceLabel}</div>
          <div>{this.state.balance}</div>
        </UserInfoBalance>
      </UserInfoStyled>
    )
  }
}

export default UserInfo; 

function getData() {
  return {
    name: 'Dominik',
    balance: 1500,
    avatar: 'https://cdn1.iconfinder.com/data/icons/animal-face-avatars-1/90/2-128.png'
  }
}