import './App.css';
import ColorPicker from './lib/index';

function App() {
  
  return (
    <>
      <ColorPicker height="100px"/>
      <br/>
      <ColorPicker shape="circle" height="100" defaultColor="#4A412A"/>
      <br/>
      <ColorPicker height="120" shape="hexagon" defaultColor="#4A412A"/>
    </>
  );
}

export default App;
