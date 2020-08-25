import React, {useState} from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import Social from './Social/Social';
import Copyright from './Copyright/Copyright';
import styled from 'styled-components';

const Container = styled.footer``;

const Headline = styled.h5`
margin-top: 83px;
margin-bottom: 53px;
font-family: "Roboto-Medium";
color: #222222;
line-height: 0.52;
font-size: 42px;
letter-spacing: -0.1em;
margin-left: 11px;
display: inline-block;
`;

const Menu = styled.nav``;

const List = styled.ul``;

const Item = styled.li``;

const Link = styled.a``;

const Footer = (props) => {
  return (
    <Container>
      <Headline> Big Shop </Headline>
      <FooterMenu/>
      <Social/>
      <Copyright/>
    </Container>
  );
}

export default Footer;