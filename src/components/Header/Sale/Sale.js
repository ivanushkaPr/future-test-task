import React, {useState} from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'

const Ad = styled.div`
  position: absolute;
  text-align: left;
  right: 205px;
  top: 332px;`;

const Collection = styled.p`
  text-transform: capitalize;
  font-family: Roboto-Bold;
  margin: 0px;
  font-size: 87pt;
  line-height: 87pt;
  color: ${props => props.black === true ? '#151515' : 'white'};
`;

const Discount = styled.p`
  margin-top: 0px;
  font-family: Roboto-Medium;
  font-size: 38pt;
  margin-left: 9px;
  line-height: 80pt;
  color: white;
  text-transform: uppercase;
`;

const Price = styled.span`
color: #fbf934;
text-transfrom: lowercase;`;

const GetDetails = styled.div`
  font-size: 20px;
  box-sizing: border-box;
  position: relative;
  top: 12px;
  left: 18px;
  font-family: OpenSans-SemiBold;
  background-color: white;
  box-shadow: 0px 5px 23.75px 1.25px rgba(189, 227, 239, 0.75); 
  padding-left: 47px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 83px;
  border-radius: 27px;
  border: none;
  max-width: 200px;
`;

const GetDetailsSubmit = styled.button`
  position: absolute;
  right: 35px;
  top: 17px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
`;
const Sale = props => {
  return (
    <Ad>
      <Collection black={true}> {props.season} </Collection>
      <Collection> Collection </Collection>

      <Discount>
        <Price>25%</Price> off
      </Discount>

      <GetDetails type="submit">
        Details
       <GetDetailsSubmit> → </GetDetailsSubmit>
      </GetDetails>
    </Ad>
  );
}

export default Sale;