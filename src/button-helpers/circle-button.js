import React from 'react';
import styled, { ThemeProvider } from "styled-components";


const CircleButtonStyle = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    background: ${props => props.theme.color};
    margin: 0 auto;
`

CircleButtonStyle.defaultProps = {
  theme: {
    color: "#000000"
  }
}

const CircleButton = ({defaultColor, isActive=false}) => {

  const theme = {color: isActive ? 'white': defaultColor}

  return (
    <ThemeProvider theme={theme}>
      <CircleButtonStyle/>
    </ThemeProvider>
    
  );
}

export default CircleButton;