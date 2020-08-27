import React, { useState } from 'react';
import styled from 'styled-components';
import arrowDown from './images/down.png';
import searchIcon from './images/sr.png';


const Navigation = styled.nav`

  position: relative;
  display: flex;  
  width: 370px;
  padding-top: 14px;
  padding-bottom: 14px;
  box-sizing: border-box;
  max-height: 65px;
  background-color: white;
  border-radius: ${props => props.isModalShown === false ? '30px' : '30px 30px 0px'};
  transition-property: border-radius;
  transition-duration: ${props => props.isModalShown === false ? "2s" : "0.3s"};

  @media(max-width: 415px) {
    width: 300px;
    flex-direction: column;
    background-color: white;
    max-height: inherit;
    margin: 0 auto;
    padding: 0px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  border-right: 1px solid black;

  @media(max-width: 415px) {
    width: 100%;
    justify-content: center;
    border-right: none;
    border-bottom: 1px solid black;
    padding: 18px 0px;
  }
 `;

const SearchButton = styled.button`
    margin-top: 2px;
    margin-left: 29px;
    margin-right: 17px;
    background-image: url(${searchIcon});
    background-size: 28px 28px;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    background-color: transparent;
    border: none;
  `;

const Search = styled.input`
  font-family: OpenSans-Regular;
  font-size: 18px;
  line-height: 26px;
  color: #151515;
  max-width: 100px;
  border: none;
  background-color: transparent;
  
  &::placeholder {
    color: #151515;
  }
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 51%;
  position: relative;
  @media(max-width: 415px) {
    width: 100%;
    justify-content: center;
  }
  `;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-left: 0px;
`

const Item = styled.li`
padding-left: 40px;
`;

const Category = styled.p`
  font-family: OpenSans-Regular;
  font-size: 18px;
  line-height: 26px;
  color: #151515;
  text-transform: capitalize;
`;

const Modal = styled.div`
  min-width: 100%;
  position: absolute;
  text-align: left;
  top: 34px;
  height: ${props => props.show ? "200px" : "0px"};
  overflow: hidden;
  color: black;
  background-color: white;
  border-radius: 0px 0px 30px 30px;
  transition-property: height;
  transition-duration: 1s;
  `;

const OpenButton = styled.button`
  margin-left: 14px;
  background-image: url(${arrowDown});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  `;


const Menu = (props) => {
  const [collections, setCollections] = useState({
    seasons: ['summer', 'autumn', 'winter', 'spring'],
    shown: 'summer',
    submenu: false,
  });

  const onClickButtonHandler = e => {
    const newState = {
      ...collections,
      submenu: !collections.submenu,
    };

    setCollections(newState);
  };

  const onClickSeasonHandler = e => {
    console.log(e.target.nodeName)
    if(e.target.nodeName === 'P' || e.target.nodeName === 'LI') {
      const choosedSeason = e.target.textContent;
      const newState = {
        ...collections,
        shown: choosedSeason,
        submenu: false
      }

      props.seasonChanged(choosedSeason);
      setCollections(newState);
    }
  }

  const onBlurButtonHandler = () => {
    const newState = {
      ...collections,
      submenu: false
    }
    setCollections(newState);
  }

  return (
    <Navigation isModalShown={collections.submenu}>
      <SearchContainer>
        <SearchButton></SearchButton>
        <Search placeholder="Search"/>
      </SearchContainer>
        
      <ListContainer>
      <List>
          <Item>
            <Category>
              { collections.shown }
            </Category>
          </Item>
        </List>
        <OpenButton onBlur={onBlurButtonHandler}  onClick={onClickButtonHandler}/>
          <Modal onClick={onClickSeasonHandler} show={collections.submenu}>
            <List>
              {collections.seasons.map(season => {
                return season !== collections.shown ? (
                  <Item key={season}>
                  <Category>
                    { season }
                  </Category>
                </Item>
                ) : null
              })}
            </List>
          </Modal>

      </ListContainer>
      
    </Navigation>
  );
}

export default Menu;