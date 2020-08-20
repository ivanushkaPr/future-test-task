import React, {useState} from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import Social from './Social/Social';
import Copyright from './Copyright/Copyright';
import styled from 'styled-components';

const Container = styled.footer``;

const Headline = styled.h5``;

const Menu = styled.nav``;

const List = styled.ul``;

const Item = styled.li``;

const Link = styled.a``;

const Footer = (props) => {
  return (
    <Container>
      <Headline></Headline>
      <FooterMenu/>
      <Social/>
      <Copyright/>
    </Container>
  );
}

export default Footer;