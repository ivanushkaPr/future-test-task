import React from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs/AboutUs';
import './Brands.css';

const Container = styled.div`
  display: flex;
  margin: 0 215px;
  text-align: left;
  justify-content: space-between;
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