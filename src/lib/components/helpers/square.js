import React, { useState, useEffect } from 'react';

const Square = ({height, defaultColor, onChange}) => {

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

  useEffect(() => {
    onChange(color)
  }, [color])

  return (
    <input 
        value={color} 
        type="color" 
        style={{'height': height, 'width': height}}
        onInput={handleChange}
    />
  );
}

export default Square;