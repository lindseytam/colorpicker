import './App.css';
import ColorPicker from './lib/index';

function App() {
  
  return (
    <>
      <ColorPicker height="100px"/>
      <br/>
      <ColorPicker shape="circle" height="100px"/>
      <br/>
      <ColorPicker height="80" width="60" shape="hexagon"/>
    </>
  );
}

export default App;
