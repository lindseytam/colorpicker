import React from 'react';
import styled, { ThemeProvider } from "styled-components";


const HexagonButtonStyle = styled.div`
    height: ${props => props.theme.height}px;
    width: ${props => 2/3 * props.theme.height}px;
    background: ${props => props.theme.color};
    position: relative;
    // left: ${props =>1 * props.theme.height}px;
    box-sizing: border-box;
  &:before, &:after {
    content: "";
    position: absolute;
    height: 0;
    width:  0;
    top:  0;
    border-top: ${props => 0.5 * props.theme.height}px solid transparent; 
    border-bottom: ${props => 0.5 * props.theme.height}px solid transparent; 
  }
  &:before {
    left: -${props => 0.25 * props.theme.height}px;
    border-right: ${props => 0.25 * props.theme.height}px solid ${props => props.theme.color};
  }
  &:after {
    right: -${props => 0.25 * props.theme.height}px;
    border-left: ${props => 0.25 * props.theme.height}px solid ${props => props.theme.color};
  }         
`

HexagonButtonStyle.defaultProps = {
  theme: {
    color: "#000000",
    height: 50
  }
}

const HexagonButton = ({defaultColor, isActive=false}) => {

  const theme = {color: isActive ? 'white': defaultColor, height: 30}

  return (
    <ThemeProvider theme={theme}>
      <HexagonButtonStyle />
    </ThemeProvider>
    
  );
}

export default HexagonButton;