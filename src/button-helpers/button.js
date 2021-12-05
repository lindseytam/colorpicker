import React from 'react';
import SquareButton from './square-button'
import CircleButton from './circle-button'
import HexagonButton from './hexagon-button';


const Buttons = ({shape, defaultColor, isActive=false}) => {

  // renders a single button (active button)
  const renderButton = () => {
      return (
        <>
            {shape === 'square' && <SquareButton defaultColor={defaultColor} isActive={isActive}/>}
            {shape === 'circle' && <CircleButton defaultColor={defaultColor} isActive={isActive}/>}
            {shape === 'hexagon' && <HexagonButton defaultColor={defaultColor} isActive={isActive}/>}
        </>
      )
  }
  // renders an inactive button
  const renderInactiveButton = () => {
      return (
        <div className='button ring' style={{backgroundColor: defaultColor}}>
            <div className='button ring-inner' style={{backgroundColor: 'white'}}>
                {renderButton()}
            </div>
        </div>
      ) 
  }
  
  return (
    <div className='button internal' style={{backgroundColor: isActive ? defaultColor : "white"}}>
        {isActive ? renderButton(): renderInactiveButton()}
    </div>
  );
}

export default Buttons;