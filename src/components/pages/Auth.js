import styled from "styled-components";
import { AccountBox } from "../accountBox";
import React from 'react';


const AppContainer = styled.div`
width: 85%;
height: 100%;
 padding-top: 5em;
// padding-bottom: auto;

// // padding-left: 60em;
// padding-Right: 10em;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
`;


function Auth() {
  return (
    <React.Fragment>
    <AppContainer>
      <AccountBox/>
    </AppContainer> 
    </React.Fragment> 
  ); 
}

export default Auth;
