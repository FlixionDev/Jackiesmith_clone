import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Login&signup/Main';
import Clothing from './Components/Clothing/Clothing';
import Sneaker from './Components/Sneaker/Sneaker';
import Bags from './Components/Bags/Bags';
import ProductDescription from './Components/ProductDescription/ProductDescription';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Clothing /> */}
      {/* <Main /> */}
      {/* <Sneaker /> */}
      <Bags />
      {/* <ProductDescription /> */}
    </div>
  );
}

export default App;
