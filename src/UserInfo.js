import React, { Component } from 'react';
import styled from 'styled-components';

import { sizes, formatMoney, getUserData } from './utils';

const avatarSquare = 35;
const borderColor = '#F18990';
const mainColor = '#EE5F63';

const UserInfoStyled = styled.div`
  grid-area: user;
  padding-top: 30px;
  text-align: center;
  
  @media (min-width: ${sizes.tablet}px) {
    padding: 0 0 10px 0;
    border-bottom: 1px solid ${borderColor};
    text-align: left;
    
    display: grid;
    grid-gap: 15px;
    grid-template-columns: max-content auto;
    align-items: center;
  }
`

const UserInfoAvatart = styled.div`

  display: inline-flex;
  border-radius: 50%;
  padding: 5px;
  background: #fff;
  
  img {
    width: ${avatarSquare}px;
    height: ${avatarSquare}px;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    padding: 3px;
    
    img {
      border: 2px solid ${mainColor};
      border-radius: 50%;
      padding: 8px;
    }
  }
`

const UserInfoDetails = styled.div`
  
`

const UserInfoName = styled.div`
  font-size: 1.15rem;
  font-weight: 400;
  
  span:last-child { display: none; }
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 1rem;
    font-weight: 500;
    
    span:last-child { display: inline; }
  }
`

const UserInfoBalance = styled.div`
  div:first-child {
    /* font-size: 1rem; */
  }
  
  .user-info__balance {
    font-size: 1.1rem;
    font-weight: 400;
  }
  
  div:last-child {
    display: none;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    div:first-child { display: none; }
    div:last-child { display: block; }
    
    .user-info__balance {
      float: left;
      margin-right: 5px;
    }
    
    div:last-child,
    .user-info__balance {
      font-size: 1rem;
      font-weight: 500;
    }
  }
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
    const userData = getUserData();
    
    this.setState(userData);
  }

  render() {
    const balanceLabel = `Available Balance`;
    const balanceLabelShort = `Available`;
    
    
    return (
      <UserInfoStyled>
        <UserInfoAvatart>
          <img src={this.state.avatar} />
        </UserInfoAvatart>
        <UserInfoDetails>
          <UserInfoName><span>{this.state.name}</span>&nbsp;<span>{this.state.surname}</span></UserInfoName>
          <UserInfoBalance>
            <div>{balanceLabel}</div>
            <div className="user-info__balance">{formatMoney(this.state.balance)}</div>
            <div>{balanceLabelShort}</div>
          </UserInfoBalance>
        </UserInfoDetails>
      </UserInfoStyled>
    )
  }
}

export default UserInfo;