import React from 'react';
import './ColorPicker.css'
import Hexagon from './helpers/hexagon'

const ColorPicker = ({height, width, shape, defaultColor, onChange}) => {



  const hexagon = () => ({
    width: `200px`,
    height: `200px`,
    backgroundColor: `#1DA1F2`,
    // backgroundImage: (isPreview) ? 'url(/path/to/image.jpg)' : 'none',
  });
  

  const setDimensions = () => {
    // if width is not specified, set width and height
    if (!height && !width) {
      height = "100px"
      width = "100px"
    } else if (!height) {
        height = "100px"
    } else if (!width) {
        width = "100px"
    }
  }

  setDimensions()

  console.log("height-", height)
  return (
    <>
      {/* <input className={shape} type="color" style={{'height': height, 'width': width}}/> */}
      {shape === 'hexagon'? <Hexagon />:
      <input className={shape} type="color" style={{'height': height, 'width': width}}/>}
    </>
  );
}

export default ColorPicker;
