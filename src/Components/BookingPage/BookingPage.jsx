import React from 'react';
import Form from 'react-bootstrap/Form';
import './BookingPage.css';
import { Button } from 'react-bootstrap';

const BookingPage = () => {
  return (
    <div className='booking_page'>
      <h1 className='my-5'>Book an Appointment</h1>
      <div className='booking_wrapper'>
        <div className='booking_container'>
          <div className='select_doctor'>
            <label>Select Doctor</label>
            <Form.Select aria-label='Default select example'>
              <option>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select>
          </div>
          <div className='select_doctor'>
            <label>Select Date</label>
            <Form.Control type='date' />
          </div>
        </div>
        <div className='booking_slots'>
          <div className='select_slots'>
            <label>Available Time Slots</label>
            <div className='slots_list'>
              <Button variant='light'>9:00 AM</Button>
              <Button variant='light'>10:00 AM</Button>
              <Button variant='light'>11:00 AM</Button>
              <Button variant='light'>01:00 PM</Button>
              <Button variant='light'>02:00 PM</Button>
              <Button variant='light'>03:00 PM</Button>
            </div>
          </div>
          <div className='reason_for_visit'>
            <label>Reason for Visit</label>
            <Form.Control type='textarea' />
          </div>
          <div className='additional_notes'>
            <label>Additional Notes(Optional)</label>
            <Form.Control type='textarea' />
          </div>
          <Button className='mt-3' variant='success'>
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
