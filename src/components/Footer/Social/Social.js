import React, {useState} from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 
library.add(faGooglePlusG); 
library.add(faInstagram); 
library.add(faTwitter); 

const Container = styled.footer`
margin-top: 47px;
`;

const List = styled.ul`
display: flex;
justify-content: space-between;
margin: 0 auto;
max-width: 310px;
padding-left: 0px;
`;

const Item = styled.li`
border: 1px solid #ecebed;
border-radius: 50%;
width: 55px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background-image: linear-gradient( 63deg, rgb(140,132,249) 0%, rgb(155,109,245) 99%);
}

&:hover a svg {
  color: white;
}
`;



const Link = styled.a`
  &:hover svg {
    color: white;
  }
`;

const Social = (props) => {
  const socialIcons = [
    <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{fontSize: '25px'}} />,
    <FontAwesomeIcon icon={['fab', 'google-plus-g']} style={{fontSize: '25px'}}/>,
    <FontAwesomeIcon icon={['fab', 'instagram']} style={{fontSize: '25px'}}/>,
    <FontAwesomeIcon icon={['fab', 'twitter']} style={{fontSize: '25px'}} />
  ];

  return (
    <Container>
      <List>
        {socialIcons.map((icon, index) => {
          return (
            <Item key={icon + index}>
              <Link>
                {icon}
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

export default Social;