import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  min-width: 347px;
  padding-top: 35px;
  margin-bottom: 25px;
  padding-bottom: 31px;
  min-height: 381px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: auto;
  transition-property: box-shadow;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 5px 47.5px 2.5px rgba(221, 223, 224, 0.75);
  }
`;

const Image = styled.img`
max-width: 347px;
max-height: 443px;
`;

const Name = styled.p`
margin-top: 7px;
margin-bottom: 0px;
font-family: OpenSans-Regular;
font-size: 18px;
line-height: 25px;
color: #777777;
`;

const Price = styled.p`
margin-top: 11px;
font-family: MyriadPro-SemiBold;
font-size: 25px;
line-height: 25px;
color: #333333;
`;

const ProductCard = props => {
  return (
    <Product>
      <Image src={props.src}/>
      <Name> { props.data.name } </Name>
      <Price> $ { props.data.price } </Price>
    </Product>
  );
}

export default ProductCard;