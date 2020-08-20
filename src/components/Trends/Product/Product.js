import React from 'react';
import styled from 'styled-components';

const Product = styled.div``;

const Rating = styled.div``;

const Likes = styled.div``;

const Comments = styled.div``;

const Count = styled.p``;

const Wrapper = styled.div``;

const Photo = styled.img``;

const Name = styled.p``;

const Price = styled.p``;

const AddButton = styled.button``;


const ProductCard= props => {
  return (
    <Product>
      <Rating>
        <Likes>
          <Count></Count>
        </Likes>

        <Comments>
          <Count></Count>
        </Comments>
      </Rating>
        <Wrapper>
        <Photo></Photo>
          <Name></Name>
          <Price></Price>
        </Wrapper>

        <AddButton></AddButton>
      </Product>
  );
}

export default ProductCard;