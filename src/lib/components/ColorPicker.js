import React from 'react';
import './ColorPicker.css'
import Hexagon from './helpers/hexagon'
import Circle from './helpers/circle'

const ColorPicker = ({height=100, width=100, shape="quad", defaultColor, onChange}) => {  

  return (
    <>
      {shape === 'circle' && <Circle height={height} defaultColor={defaultColor}/>}
      {shape === 'quad' && <input className={shape} type="color" style={{'height': height, 'width': width}}/>}
      {shape === 'hexagon' && <Hexagon width={width} height={height} defaultColor={defaultColor}/>}
    </>
  );
}

export default ColorPicker;
