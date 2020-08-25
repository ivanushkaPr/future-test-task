import React, {useState} from 'react';
import styled from 'styled-components';

const Menu = styled.nav``;

const List = styled.ul`
display: flex;
margin: 0px 540px;
justify-content: space-between;
padding-left: 0px;
`;

const Item = styled.li`
list-style-type: none;
`;



const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-family: "OpenSans-SemiBold";
  color: rgb(64, 64, 64);
  line-height: 1.444;
  text-transform: capitalize;
`;




const FooterMenu = (props) => {
  const items = ["man", "woman", "kids", "bags", "watches", "toys"];

  return (
      <Menu>
        <List>

          {items.map(item => {
            return (
              <Item key={item}>
                <Link href={`#${item}-link-stub`}>
                  { item }
                </Link>
              </Item>
            );
          })}
          
        </List>
      </Menu>    
  );
}

export default FooterMenu;