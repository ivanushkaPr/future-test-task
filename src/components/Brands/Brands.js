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
`;

const Wrapper = styled.div`
`;

const IPhone = styled.img``;

const Circle = styled.img``;

const ZigZag = styled.img``;

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