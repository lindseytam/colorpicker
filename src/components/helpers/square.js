import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";


const SquareInput = styled.input.attrs({ 
  type: 'color'
})`
    background: ${props => props.theme.color};
    color: ${props => props.theme.color};
    height: ${props => props.theme.height}px;
    width: ${props => props.theme.height}px;
`

SquareInput.defaultProps = {
  theme: {
    color: "#000000",
    height: 100
  }
}

const Square = ({height, defaultColor, onChange}) => {

  const [color, setColor] = useState(defaultColor) 
  const [theme, setTheme] = useState({
    color: defaultColor,
    height: height
  })

  // Update color when user selects a different input
  const handleChange = (e) => {
    setColor(e.target.value)
    const updatedTheme = {...theme, color: e.target.value, height: height}
    setTheme(updatedTheme)
  }

  useEffect(() => {
    onChange(color)
  }, [color])

  return (
    <>
    <ThemeProvider theme={theme}>
      <SquareInput 
        data-testid="square"
        value={color}
        onInput={handleChange}
      />
      </ThemeProvider>
    </>
  );
}

export default Square;