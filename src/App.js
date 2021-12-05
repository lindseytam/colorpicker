import { useState } from 'react';
import './App.css';
import ColorPicker from './lib/index';
import ForkMeOnGithub from 'fork-me-on-github';
import Buttons from './button-helpers/button';
import Code from './code-snippets/render-code'

function App() {
  const height = 200
  const [shape, setShape] = useState('circle')
  const [color, setColor] = useState("#14E298")
  
  const buttons = ['circle', 'square', 'hexagon']

  // Handles changing color input
  const handleChange = (change) => {
    setColor(change)
  }

  // Formats all buttons
  const renderButton = (elem) => {
    return (
      <button
        id={elem}
        onClick={() => {
          setShape(elem)
        }}
      >
        <Buttons shape={elem} defaultColor={color} isActive={elem === shape}/>
      </button>
    )
  }
  
  return (
    <div className='colorpicker-container'>
      <ForkMeOnGithub repo="https://github.com/lindseytam/colorpicker" colorBackground={color}/>
      <h1>Shapely Color Picker</h1>

      {/* Format all buttons */}
      <div className='button-container'>
        {buttons.map((elem) => renderButton(elem))}
      </div>

      {/* Formats sample color picker */}
      <div className='input-container'>
        <ColorPicker height={height} defaultColor={color} shape={shape} onChange={handleChange}/>
      </div>

      {/* Formats all code snippets */}
      <Code shape={shape} color={color} height={height} />

      {/* Formats abouts section */}
      <div className='about-container'>
        <h2>About</h2>
        <p className='about-text'>About section</p>
      </div>
    </div>
  );
}

export default App;
