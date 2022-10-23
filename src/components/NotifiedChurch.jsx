/* eslint-disable max-len */
import * as React from 'react';
import './NotifiedChurch.scss';

const NotifiedChurch = () => (
  <div className='container'>
    <div className='messages'>
      <h3 className='message1'>Selected churches has been notified</h3>
      <p className='message2'>Please check back in later for updates and responses from the churches</p>
    </div>
    <div className='buttons'>
      <button type="button" className='button-menu'> Return to menu</button>
      <button type="button" className='button-family'> Return to Family</button>
    </div>
  </div>
);

export default NotifiedChurch;
