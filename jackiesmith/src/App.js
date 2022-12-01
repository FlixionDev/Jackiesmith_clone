import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Login&signup/Main';
import Foot from './Components/Login&signup/Foot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './Components/Login&signup/Profile';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Main />
      <Foot />
    </div>
  );
}

export default App;
