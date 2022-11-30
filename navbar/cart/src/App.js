
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Info from "./components/checkout/Info"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/checkout' element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
