import React, {useState} from 'react';
import styled from 'styled-components';

const Navigation = styled.nav``;

const Search = styled.input``;

const ListContainer = styled.div``;

const List = styled.ul``;

const Item = styled.li``;

const Category = styled.a``;

const OpenButton = styled.button``;



const Menu = (props) => {
  return (
    <Navigation>
      <Search>

      </Search>
      <ListContainer>
        <List>
          <Item>
            <Category></Category>
          </Item>
        </List>

        <OpenButton>

        </OpenButton>
      </ListContainer>      
    </Navigation>
  );
}

export default Menu;