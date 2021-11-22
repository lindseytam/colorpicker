import React from 'react';
import styled from "styled-components";

const Hexagon = ({height, width, shape, defaultColor, onChange}) => {
    
  const Hexagon = styled.input.attrs({ 
    type: 'color',
    // default: '#00aec9'
  })`
      height: 80px;
      width: 60px;
      background: #00aec9;
      position: relative;
      left: 25px;
      box-sizing: border-box;
    
    &:before, &:after {
      content: "";
      position: absolute;
      height: 0;
      width:  0;
      top:  0;
      /* half height */
      border-top: 40px solid transparent;
      border-bottom: 40px solid transparent;
    }
    &:before {
      left: -20px;
      border-right: 20px solid #00aec9;
    }
    &:after {
      right: -20px;
      border-left: 20px solid #00aec9;
    }         
  `
  

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


  return (
    <>
      <Hexagon />
    </>
  );
}

export default Hexagon;