import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";


const HexagonInput = styled.input.attrs({ 
  type: 'color',
})`
    height: ${props => props.theme.height}px;
    width: ${props => 2/3 * props.theme.height}px;
    background: ${props => props.theme.color};
    position: relative;
    // left: ${props => 0.25 * props.theme.height}px;
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

HexagonInput.defaultProps = {
  theme: {
    color: "#000000",
    height: 100
  }
}

const Hexagon = ({height, defaultColor, onChange}) => {

  const [color, setColor] = useState(defaultColor) // handles center of hexagon (square)
  const [theme, setTheme] = useState({ // handles sides of hexagon (triangles)
    color: defaultColor,
    height: height
  })

  // Update color when user selects a different input
  const handleChange = (e) => {
    setColor(e.target.value)
    const updatedTheme = {...theme, color: e.target.value}
    setTheme(updatedTheme)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <HexagonInput 
        value={color}
        onInput={
          handleChange
        }
      />
      </ThemeProvider>
    </>
  );
}

export default Hexagon;