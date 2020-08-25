
import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';
import productState from './productsState';


import bigCircle from './images/bigCircle.png';
import smallTriangle from './images/transTriangle.png';
import bigSquare from './images/bigSquare.png'
import square from './images/square.png'
import triangle from './images/triangle.png';
import zigzag from './images/zigzag.png';

const Wrapper = styled.div`
  position: relative;
  background-image: url(${bigCircle}), url(${bigSquare});
  background-size: 144px, 88px;
  background-position: 37px 393px, 1442px 1110px;
  background-repeat: no-repeat;
`;

const Figure = styled.img`
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
z-index: 1000;`;


const Container = styled.section`
  background-image: url(${triangle}), url(${zigzag});
  background-size: 109px 108px, 33px 60px;
  background-position: 230px 91px, 1215px 58px;
  background-repeat: no-repeat;
  margin: 0px 110px;
  margin-top: -111px;
  padding-bottom: 88px;
  background-color: white;
  min-height: 200px;
  box-shadow: 0px 5px 47.5px 2.5px rgba(237, 235, 253, 0.75);
  `;

const Trend = styled.h1`
  padding-top: 101px;
  margin-top: 0px;
  font-family: OpenSans-Bold;
  font-size: 50px;
  line-height: 26px;
  text-transform: capitalize;
  `;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 101px;
  margin-right: 108px;
  margin-top: 91px;
`;

const Trends = props => {
  const [bags, setBags] = useState(productState);


  const onMouseOver = (e) => {

  }

  return (
    <Wrapper>
      <Figure top={'477px'} left={'1431px'} width={109} height={109} src={square}/>
      <Figure top={'1136px'} left={'60px'} width={91} height={91} src={smallTriangle}/>
 
      <Container>
      <Trend>
        trendy arrivals
      </Trend>

      <Products>

        {bags.products.map(bag => {
          return <Product key={bag.id} data={bag}/>
        })}
      </Products>
    </Container>
    </Wrapper>
  );
}

export default Trends;