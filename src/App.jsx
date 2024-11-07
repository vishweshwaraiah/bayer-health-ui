import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Register';
import LandingPage from './Components/LandingPage/LandingPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BookingPage from './Components/BookingPage/BookingPage';

const App = () => {
  const getAuthDetails = () => {
    console.log('User loggedin!');
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/welcome' element={<WelcomePage />} />
        <Route exact path='/book_appointment' element={<BookingPage />} />
        <Route exact path='/about' element={<About />} />
        <Route
          exact
          path='/login'
          element={<Login clickHandler={getAuthDetails} />}
        />
        <Route
          exact
          path='/register'
          element={<Registration clickHandler={getAuthDetails} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
