import React, { useState } from 'react';
import styled from 'styled-components';
import productCss from './Product.css';
import like from './images/like.png';
import comment from './images/comment.png';


const Product = styled.div`
  height: 430px;
  flex-basis: 29.9%;
  flex-shrink: 0;
  flex-grow: 0;
  padding-top: 17px;
  margin-bottom: 63px;
  transition-property: box-shadow;
  transition-duration: 0.4s;
    &:hover button, &:hover > div {
      opacity: 1;
    }

    &:hover {
      box-shadow: 0px 5px 47.5px 2.5px rgba(221,223,224,0.75);
    }

    @media(max-width: 1024px) {
      flex-basis: 300px;
    }
`;

  const Rating = styled.div`
    margin-left: 24px;
    margin-right: 16px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    font-family: OpenSans-Regular;
    opacity: 0;
  transition-property: opacity;
  transition-duration: 0.4s;
    `;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;`;

  const Count = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: ${props => props.marginLeft};
  `;

const Wrapper = styled.div``;

const Photo = styled.div`
background-image: url(${props => props.src});
width: 100%;
  min-height: 260px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Name = styled.p`
font-size: 18px;
line-height: 25px;
font-family: OpenSans-Regular;
margin-top: 27px;
margin-bottom: 0px;
`;

const Price = styled.p`
margin-top: 11px;
font-size: 25px;
line-height: 25px;
font-family: OpenSans-SemiBold;
`;

const AddButton = styled.button`
border: none;
border-radius: 29px;
padding: 17px 46px;
color: white;
font-family: OpenSans-SemiBold;
font-size: 20px;
line-height: 26px;
box-shadow: 0px 5px 23.75px 1.25px rgba(240,239,254,0.75);
background-image: linear-gradient( 64deg,rgb(140,132,249) 0%,rgb(161,101,244) 100%);
opacity: 0;
transition-property: opacity;
transition-duration: 0.4s;
`;


const ProductCard= props => {
  const {id, name, price, likes, comments, path} =  props.data;
  
  const src = require('./images/bags/' + id + '.png');
  return (
    <Product>
      <Rating>
        <Likes>
          <img src={like}/>
          <Count marginLeft={'4px'}> {likes} </Count>
        </Likes>

        <Comments>
        <img src={comment}/>
          <Count marginLeft={'4px'}> {comments} </Count>
         
        </Comments>
      </Rating>
        <Wrapper>
          <Photo src={src}> </Photo>
          <Name> {name} </Name>
          <Price >$ { price} </Price>
        </Wrapper>

        <AddButton>
          Add to Cart
        </AddButton>
      </Product>
  );
}

export default ProductCard;