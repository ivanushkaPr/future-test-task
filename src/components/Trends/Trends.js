import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';
import productState from './productsState';

const Container = styled.section`
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
  );
}

export default Trends;