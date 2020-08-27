import React, {useState} from 'react';
import styled from 'styled-components';

const Menu = styled.nav``;

const List = styled.ul`
display: flex;
margin: 0px 540px;
justify-content: space-between;
padding-left: 0px;

@media(max-width: 1024px) {
  margin: 0px 250px;
}

@media(max-width: 768px) {
  margin: 0px 150px;
}

@media(max-width: 415px) {
  margin: 0px 15px;
}

@media(max-width: 320px) {
  flex-direction: column;
}
`;

const Item = styled.li`
list-style-type: none;

@media(max-width: 320px) {
  margin: 5px 0px;
  fonst-size: 32px;
}
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