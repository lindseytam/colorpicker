import React from 'react';
import './ColorPicker.css'
import Hexagon from './helpers/hexagon'
import Circle from './helpers/circle'
import Square from './helpers/square';

const ColorPicker = ({height=100, shape="square", defaultColor="#14E298", onChange}) => {  

  const handleChange = (change) => {
    onChange(change)
  }

  return (
    <>
      {shape === 'circle' && <Circle height={height} defaultColor={defaultColor} onChange={handleChange}/>}
      {shape === 'square' && <Square defaultColor={defaultColor} height={height} onChange={handleChange}/>}
      {shape === 'hexagon' && <Hexagon height={height} defaultColor={defaultColor} onChange={handleChange}/>}
    </>
  );
}

export default ColorPicker;
