import { useState } from 'react';
import './App.css';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Register';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className='main-page'>
      <RouterProvider router={router}>
        {isLoggedIn ? (
          <div className='main-page'>
            This is Home/Main Page and User is {userName}
          </div>
        ) : (
          <>
            {isLogin ? (
              <Login clickHandler={getAuthDetails} />
            ) : (
              <Registration />
            )}
            <button className='mt-3' onClick={toggleLogin}>
              Login/Register
            </button>
          </>
        )}
      </RouterProvider>
    </div>
  );
}

export default App;
