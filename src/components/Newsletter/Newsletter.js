import React from 'react';
import styled from 'styled-components';


const Container = styled.section`
margin-top: -75px;
border-top: 0.1px solid transparent;
background-image: linear-gradient( 45deg, rgb(140,132,249) 0%, rgb(161,101,244) 100%);
position: relative;
z-index: -1000;
width: 100%;
padding-bottom: 124px;
padding-top: 42px;
`;

const Headline = styled.h3`
margin-top: 139px;
font-size: 50px;
font-family: "OpenSans-Bold";
color: rgb(255, 255, 255);
line-height: 0.52;

`;

const Wrapper = styled.div``;

const Label = styled.label`
position: relative;
margin-top: 39px;
display: inline-block;

@media(max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 25px;
}
`;

const Email = styled.input`
padding-top: 23px;
padding-bottom: 23px;
padding-left: 23px;
color: #929292;
min-width: 846px;
border-radius: 35px;
box-sizing: border-box;
background-color: rgb(255, 255, 255);
font-family: OpenSans-Regular;
font-size: 20px;
line-height: 26px;
border: none;
margin-bottom: 5px;

@media(max-width: 768px) {
  min-width: 500px;
}

@media(max-width: 415px) {
  margin-bottom: 25px;
  min-width: 350px;
  box-shadow: 0px 0px 10px 1px purple;
}

@media(max-width: 400px) {
  min-width: 300px;
}
`;


const Submit = styled.button`
position: absolute;
right: 6px;
padding: 18px 69px;
toP: 5px;
border-radius: 45px;
border: none;
color: white;
background-image: linear-gradient( 62deg,rgb(140,132,249) 0%,rgb(156,108,245) 100%);
font-size: 20px;
line-height: 26px;
font-family: MyriadPro-Regular;

@media(max-width: 415px) {
  position: static;
}
}
`;

const Newsletter = props => {
  return (
    <Container>
        <Headline>
          Newsletter
        </Headline>

        <Wrapper>
          <Label>
            <Email placeholder="Enter your email address.."/>
            <Submit button type="submit">
              Submit
            </Submit>
          </Label>
        </Wrapper>
    </Container>
  );
}

export default Newsletter;