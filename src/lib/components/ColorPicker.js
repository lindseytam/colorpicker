import React from 'react';
import './ColorPicker.css'
import Hexagon from './helpers/hexagon'
import Circle from './helpers/circle'
import Square from './helpers/square';

const ColorPicker = ({height=100, shape="square", defaultColor, onChange}) => {  

  return (
    <>
      {shape === 'circle' && <Circle height={height} defaultColor={defaultColor}/>}
      {shape === 'square' && <Square defaultColor={defaultColor} height={height}/>}
      {shape === 'hexagon' && <Hexagon height={height} defaultColor={defaultColor}/>}
    </>
  );
}

export default ColorPicker;
