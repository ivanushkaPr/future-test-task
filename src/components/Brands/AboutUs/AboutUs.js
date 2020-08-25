import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 264px`;

const Headline = styled.h2`
font-family: OpenSans-Bold;
font-size: 50px;
line-height: 26px;
margin-bottom: 35px;

`;

const Description = styled.p`
font-family: OpenSans-SemiBold;
font-size: 24px;
white-space: pre-line;
letter-spacing: 0.024em;
margin-bottom: 25px;

`;

const CategoryLink = styled.a`
  color: #8d83f9;
`;

const Content = styled.p`
margin-top: 0px;
font-family: OpenSans-Regular;
white-space: pre-line;
letter-spacing: 0.015em;
line-height: 26px;
`;


const AboutUs = props => {
  return (
    <Container>
      <Headline> Our Brands </Headline>
      <Description>
      Small Shoes 2017 new Arrivals  mini {'\n'}
      Messenger <CategoryLink>Classic Shoes</CategoryLink>
      </Description>
      <Content>
      In porttitor elit ac mi placerat hendrerit. Morbi accumsan, erat in {"\n"}
      ullamcorper consectetur, nisi erat efficitur eros, sagittis tristique {"\n"}
      odio turpis vitae dui. Vestibulum gravida est ut erat pretium, non {"\n"}
      pretium diam feugiat. Integer egestas suscipit lorem ac fermentum. {"\n"}
      Integer at mauris vitae justo sagittis dapibus. Pellentesque sit amet {"\n"}
      nisl vitae orci vehicula faucibus. Fusce et lat, feugiat est. 
      </Content>
    </Container>
  );
}

export default AboutUs;

