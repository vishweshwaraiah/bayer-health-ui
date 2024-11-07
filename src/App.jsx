import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Register';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  // change below to false to see login page here
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [userName, setUserName] = useState('');

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const getAuthDetails = async (email) => {
    if (email) {
      setIsLoggedIn(true);
      setUserName(email);
    }
  };

  return isLoggedIn ? (
    <LandingPage />
  ) : (
    <div className='main_page'>
      {isLogin ? <Login clickHandler={getAuthDetails} /> : <Registration />}
      <button className='mt-3' onClick={toggleLogin}>
        Login/Register
      </button>
    </div>
  );
}

export default App;
