import React from 'react';
import Button1 from "./components/button/Button1";
import Button2 from "./components/button/Button2";

import styled, {css} from "styled-components";

const Container = styled.div`
display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
   props.primary && 
   css`
     background: #009cd5;
     color: white;
   `};
`;


export default function AppCss() {
    return (
        <div>

            <Button1></Button1>
            <Button2></Button2>
            <Container>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </Container>
        </div>
    )
}
