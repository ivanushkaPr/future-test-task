import React from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs/AboutUs';
import './Brands.css';
import line from './images/line.png';
import triangle from './images/triangle.png';
import zigzag from './images/zigzag.png'

const Container = styled.div`
  display: flex;
  padding: 0 215px;
  padding-bottom: 20px;
  text-align: left;
  justify-content: space-between;
  background-image: url(${line}), url(${triangle}), url(${zigzag});
  background-position: 451px 225px,170px 711px, 1388px 483px;
  background-repeat: no-repeat;

  @media(max-width: 1465px) {
    padding: 20px 100px;
    flex-direction: column;
    align-items: center;
    padding: 0 215px;
  }

  @media(max-width: 415px) {
    padding: 20px;
  }

  @media(max-width: 400px) {
    padding: 10px;
  }

  @media(max-width: 320px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
`;

const Brands = props => {

  return(
  <Container>
    <Wrapper>
      <AboutUs />
    </Wrapper>
    <Wrapper className={'composition'}>
      
    </Wrapper>
  </Container>
  )
};

export default Brands;