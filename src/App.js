import './App.css';
import ColorPicker from './lib/index';

function App() {
  
  return (
    <>
      <h1>Shapely Color Picker</h1>
      <ColorPicker height="100px" defaultColor="#14E298"/>
      <br/>
      <ColorPicker shape="circle" height="100" defaultColor="#14E298"/>
      <br/>
      <ColorPicker height="120" shape="hexagon" defaultColor="#14E298"/>
    </>
  );
}

export default App;
