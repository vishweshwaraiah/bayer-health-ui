import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import './WelcomePage.css';
import { Button } from 'react-bootstrap';

const WelcomePage = (props) => {
  const { userData } = props;

  const [userName, setUserName] = useState('User');

  useEffect(() => {
    if (userData) setUserName(userData.username);
  }, [userData]);

  const goTo = (screenName) => {
    console.log(screenName);
    // logic here
  };
  return (
    <div className='welcome_page'>
      <div className='side_nav'>
        <h3 className='side_nav_header'>Bayer Health</h3>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Link eventKey='link-1' onClick={goTo('dashboard')}>
            Dashboard
          </Nav.Link>
          <Nav.Link eventKey='link-2'>Patient List</Nav.Link>
          <Nav.Link eventKey='link-3'>Appointments</Nav.Link>
          <Nav.Link eventKey='link-4'>Messages</Nav.Link>
          <Nav.Link eventKey='link-5'>Logout</Nav.Link>
        </Nav>
      </div>
      <div className='welcome_content'>
        <h1>Welcome {userName}</h1>

        <h3>Today's Appointments</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Patient Name</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00AM</td>
              <td>John Doe</td>
              <td>Annual Checkup</td>
            </tr>
            <tr>
              <td>10:30 AM</td>
              <td>Jane Smith</td>
              <td>Follow up</td>
            </tr>
          </tbody>
        </Table>

        <h3>Recent Patients</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Visit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alica Johnson</td>
              <td>2023-06-01</td>
              <td>
                <Button variant='success'>View Profile</Button>
              </td>
            </tr>
            <tr>
              <td>Bob Williams</td>
              <td>2023-05-28</td>
              <td>
                <Button variant='success'>View Profile</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default WelcomePage;
