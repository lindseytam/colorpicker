import React from 'react';
import SquareButton from './square-button'
import CircleButton from './circle-button'
import HexagonButton from './hexagon-button';


const Buttons = ({shape, defaultColor, isActive=false}) => {

  return (
    <div className='button-container-internal' style={{backgroundColor: defaultColor}}>
        {shape === 'square' && <SquareButton defaultColor={defaultColor} isActive={isActive}/>}
        {shape === 'circle' && <CircleButton defaultColor={defaultColor} isActive={isActive}/>}
        {shape === 'hexagon' && <HexagonButton defaultColor={defaultColor} isActive={isActive}/>}
    </div>
  );
}

export default Buttons;