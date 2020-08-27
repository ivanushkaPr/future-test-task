import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  box-shadow: 0px 5px 47.5px 2.5px rgba(239, 239, 240, 0.75);
  border-radius: 30px;
  background-color: white;
  margin: 0 149px;
  margin-top: 114px;

  @media(max-width: 1024px) {
    margin: 0 25px;
    margin-top: 114px;
    
  }
`;

const List = styled.ul`
  padding-top: 19px;
  padding-bottom: 19px;
  padding-left: 121px;
  padding-right: 72px;
  margin-bottom: 46px;
  box-sizing: border-box;
  min-width: 1065px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 1500px) {
    min-width: auto;
  }

  @media(max-width: 1024px) {
    flex-wrap: wrap;
    
  }

  @media(max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px;
  }

  @media(max-width: 400px) {
    flex-direction: column;
  }
  `;

const Category = styled.li`
@media(max-width: 400px) {
  margin: 10px 0px;
}
`;

const Link = styled.a`
  font-family: 'OpenSans-SemiBold';
  font-size: ${props =>  props.active ? "20px" : "16px"};
  line-height: 25px;
  letter-spacing: 0.015em;
  text-shadow: ${props => props.active ? "0px 9px 5px rgba(213, 200, 247, 0.75);" : 'none'};
  color: ${props => props.active ? "#8d83f9" : 'inherit'};
`;


const Categories = props => {
  const items = Object.keys(props.data).slice(0, Object.keys(props.data).length - 1);

  return (
      <Menu>
        <List>
          {items.map(key => {
            console.log(key, 'is')
            return (
              <Category key={key} onClick={props.click} data-category={key}>
                {key === props.data.active ? 
                (<Link active>
                {key}
              </Link>) : (
                 <Link>
                 {key}
               </Link>
              )}
              </Category>
            );
          })
          }
          
        </List>
      </Menu>
  );
}

export default Categories;