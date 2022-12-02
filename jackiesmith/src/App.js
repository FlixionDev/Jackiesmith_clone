import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Login&signup/Main';
import Clothing from './Components/Clothing/Clothing';
import Sneaker from './Components/Sneaker/Sneaker';
import Bags from './Components/Bags/Bags';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';




function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    {/* <ProductDescription /> */}
    <Routes>
      <Route path='/' element={<div><Navbar/><Home/></div>}/>
      <Route path='/bags' element={<Bags/>}/>
      <Route path='/sneaker' element={<Sneaker/>}/>
      <Route path='/productdescription' element={<ProductDescription/>}/>
      <Route path='/clothing' element={<Clothing/>}/>
      <Route path='*' element={<h1 style={{textAlign:"center",color:"red",fontSize:"30px",fontWeight:"bolder"}}>404, Page not found</h1>}/>
    </Routes>  
    <Foot />
    </div>
  );
}

export default App;
