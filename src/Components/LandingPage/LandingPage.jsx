import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='landing_page'>
      <div className='header_banner'>
        <Button variant='info' onClick={goToLogin}>
          Login
        </Button>
        <h1 className='brand_title'>Bayer Healthcare</h1>
        <div className='nav_bar'>
          <nav className='navbar navbar-expand-lg navbar-light bg-orange'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <a className='nav-link' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/health_topics'>
                    Health Topics
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/resources'>
                    Resources
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/about'>
                    About Us
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/contact'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='page_title'>
          <h1>Your Health, Our Priority</h1>
          <p>
            Explore the latest health information and resources from Bayer
            Healthcare
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
