import React from 'react';
import styled, { ThemeProvider } from "styled-components";


const SquareButtonStyle = styled.div`
    height: 30px;
    width: 30px;
    background: ${props => props.theme.color};
    margin: 0 auto;
`

SquareButtonStyle.defaultProps = {
  theme: {
    color: "#000000"
  }
}

const SquareButton = ({defaultColor, isActive=false}) => {

  const theme = {color: isActive ? 'white': defaultColor}

  return (
    <ThemeProvider theme={theme}>
      <SquareButtonStyle/>
    </ThemeProvider>
    
  );
}

export default SquareButton;