import React, { useState } from 'react';
import styled from 'styled-components';
import Categories from './Categories/Categories'
import ProductCard from './ProductCard/ProductCard';
import state from './initialState';
import initialState from './initialState';

const Container = styled.div`
margin-top: 103px;
background-color: white;
position: relative;
margin-left: 123px;
margin-right: 95px;
padding-bottom: 65px;
border-top: 0.1px solid transparent;
box-shadow: 0px 5px 47.5px 2.5px rgba(237, 235, 253, 0.75);
align-content: stretch;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-left: 107px;
  margin-right: 109px;
`;

const Title = styled.h5`
margin-top: 100px;
font-family: OpenSans-Bold;
font-size: 50px;
line-height: 26px;
`;

const Showcase = props => {
  const [state, setState] = useState(initialState);

  const active = state.active;
  const renderData = Object.keys(state).slice(0, Object.keys(state).length - 1);

  const match = renderData.find(category => category === active);
  

  const onClickCategoryHandler = e => {
    const category = e.currentTarget.dataset.category;
    
    setState({
      ...state,
      active: category
    })
  }
  return (
    <Container>
        <Title> Our Showcase </Title>
      <Categories click={onClickCategoryHandler} data={state}/>
      <Products>
        {
          state[match].goods.map(good => {
            const src = require('./images/' + state[match].folderName + state[match].prefix + good.id +'.png')
            console.log(src)
            return (
              <ProductCard key={src} data={good} src={src}/>
            )
          })

        }
      </Products>
    </Container>
  );
}

export default Showcase;