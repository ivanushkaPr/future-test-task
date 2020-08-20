import React from 'react';
import styled from 'styled-components';
import Categories from './Categories/Categories'
import ProductCard from './ProductCard/ProductCard';

const Container = styled.div``;

const Products = styled.div``;


const Showcase = props => {
  return (
    <Container>
      <Categories/>
      <Products>
        <ProductCard>
          
        </ProductCard>
      </Products>
    </Container>
  );
}

export default Showcase;