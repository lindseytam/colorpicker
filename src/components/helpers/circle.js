import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";


const CircleInput = styled.input.attrs({ 
  type: 'color'
})`
    border: 0;
    border-radius: 50%;
    overflow: hidden;
    background: ${props => props.theme.color};
    color: ${props => props.theme.color};
    height: ${props => props.theme.height}px;
    width: ${props => props.theme.height}px;
`

CircleInput.defaultProps = {
  theme: {
    color: "#000000",
    height: 100
  }
}

const Circle = ({height, defaultColor, onChange}) => {

  const [color, setColor] = useState(defaultColor)

  const theme = {
    color: color,
    height: height
  }

  // handle event where user changes image
  const handleChange = (e) => {
    setColor(e.target.value)
  }

  useEffect(() => {
    onChange(color)
  }, [color])

  return (
    <>
    <ThemeProvider theme={theme}>
      <CircleInput 
        data-testid="circle"
        value={color}
        onInput={handleChange}
      />
      </ThemeProvider>
    </>
  );
}

export default Circle;