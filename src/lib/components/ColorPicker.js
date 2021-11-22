import React from 'react';
import './ColorPicker.css'
import Hexagon from './helpers/hexagon'

const ColorPicker = ({height=100, width=100, shape="quad", defaultColor="black", onChange}) => {  

  return (
    <>
      {shape === 'hexagon'? <Hexagon width={width} height={height} defaultColor={"black"}/>:
      <input className={shape} type="color" style={{'height': height, 'width': width}}/>}
    </>
  );
}

export default ColorPicker;
