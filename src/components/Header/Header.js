import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import Sale from './Sale/Sale';
import logo from './images/Logo.png';
import shape from './images/Shape.png';
import dots from './images/dots.png';
import circle from './images/circle.png';
import square from './images/square.png';



const Background = styled.header`
  border-top: 0.1px solid transparent;
  background-image: url(${dots}), url(${circle}), url(${square}), url(${shape}),  url(${props => props.season});
  background-repeat: no-repeat;
  background-size: 398px 125px, 102px, 115px , cover, 1191px 994px;
  background-position: 0px 0px, 804px 150px, 1421px 709px, 0px -20px, 0px 57px;
  width: 100%;
  min-height: 1125px;
  transition: background-image 0.5s;
`;

const Container = styled.div`
margin-top: 80px;
margin-left: 215px;
margin-right: 218px;
display: flex;
justify-content: space-between;
align-itens: center;`;

const Logo = styled.img``;

const Header = (props) => {
  const [seasons, setSeasons] = useState({
    seasons: ['summer', 'autumn', 'winter', 'spring'],
    shown: 'summer',
  });

  const onSeasonChangeHandler = (season) => {
    setSeasons({
      ...seasons,
      shown: season,
    })
  }

  return (
    <Background season={
        require('./images/' + seasons.shown + '.png')
    }>
      <Container>
        <Logo width={156} height={38} src={logo}/>
        <Menu seasonChanged={onSeasonChangeHandler}/>
      </Container>
      <Sale season={seasons.shown}/>
    </Background>
  );
}

export default Header;