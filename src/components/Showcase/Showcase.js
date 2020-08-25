import React, { useState } from 'react';
import styled from 'styled-components';
import Categories from './Categories/Categories'
import ProductCard from './ProductCard/ProductCard';
import initialState from './initialState';
import circle from './images/circle.png';
import square from './images/square.png';
import triangle from './images/bigTriangle.png';
import transTriangle from './images/transTriangle.png';
import line from './images/line.png'


const Container = styled.div`
background-image: url(${triangle}), url(${line});
background-repeat: no-repeat;
background-position: 163px 38px, 801px 52px;
margin-top: 84px;
background-color: white;
position: static;
margin-left: 123px;
margin-right: 95px;
padding-bottom: 65px;
border-top: 0.1px solid transparent;
box-shadow: 0px 5px 47.5px 2.5px rgba(237, 235, 253, 0.75);
align-content: stretch;
`;

const Figure = styled.img`
position: absolute;
background-image: url(${props => props.src});
top: ${props => props.top};
left: ${props => props.left};
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
        <Figure src={circle} left={'257px'} top={'256px'}/>
        <Figure src={transTriangle} left={'65px'} top={'868px'}/>
        <Figure src={square} left={'1485px'} top={'477px'}/>
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