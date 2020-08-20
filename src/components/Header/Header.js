import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import Sale from './Sale/Sale';
import logo from './images/Logo.png';
import shape from './images/Shape.png';
import girl from './images/Girl.png';
import dots from './images/dots.png';

const Background = styled.header`
  border-top: 0.1px solid transparent;
  background-image: url(${dots}), url(${shape}),  url(${girl});
  background-repeat: no-repeat;
  background-size: 398px 125px, cover, 1191px 994px;
  background-position: 0px 0px, 0px -20px, 0px 57px;
  width: 100%;
  min-height: 1125px;
`;


const Container = styled.div``;

const Logo = styled.img``;

const Header = (props) => {
  return (
    <Background>
      <Container>
        <Logo src={logo}/>        
        <Menu/>
        <Sale/>
      </Container>
    </Background>
  );
}

export default Header;