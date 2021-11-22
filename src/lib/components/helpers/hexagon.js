import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";


const HexagonInput = styled.input.attrs({ 
  type: 'color',
  placeholder: `${props => props.theme.color}`
})`
    height: ${props => props.theme.height}px;
    width: ${props => props.theme.width}px;
    background: ${props => props.theme.color};
    position: relative;
    left: 25px;
    box-sizing: border-box;
  
  &:before, &:after {
    content: "";
    position: absolute;
    height: 0;
    width:  0;
    top:  0;
    border-top: 40px solid transparent; //40
    border-bottom: 40px solid transparent; //40
  }
  &:before {
    left: -20px;
    border-right: 20px solid ${props => props.theme.color};
  }
  &:after {
    right: -20px;
    border-left: 20px solid ${props => props.theme.color};
  }         
`

HexagonInput.defaultProps = {
  theme: {
    color: "black",
    height: 80,
    width: 60
  }
}

const Hexagon = ({height, width, defaultColor, onChange}) => {

  const [color, setColor] = useState((defaultColor) ? "black" : defaultColor)

  const theme = {
    color: color,
    height: height,
    width: width
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <HexagonInput 
        onInput={(e) => {
          setColor(e.target.value)
          }
        }
      />
      </ThemeProvider>
    </>
  );
}

export default Hexagon;