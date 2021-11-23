import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";


const CircleInput = styled.input.attrs({ 
  type: 'color'
})`
    border: 0;
    border-radius: 50%;
    overflow: hidden;
    background: ${props => props.theme.color};
    color: ${props => props.theme.color};
    height: ${props => props.theme.diameter}px;
    width: ${props => props.theme.diameter}px;
`

CircleInput.defaultProps = {
  theme: {
    color: "#000000",
    diameter: 100
  }
}

const Circle = ({diameter, defaultColor, onChange}) => {

  const [color, setColor] = useState(defaultColor)

  const theme = {
    color: color,
    diameter: diameter
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <CircleInput 
        value={color}
        onInput={(e) => {
          setColor(e.target.value)
          }
        }
      />
      </ThemeProvider>
    </>
  );
}

export default Circle;