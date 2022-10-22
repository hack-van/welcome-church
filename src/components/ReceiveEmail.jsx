/* eslint-disable max-len */
import * as React from 'react';
import './ReceiveEmail.scss';

const data = {
  toChuch: 'Calvary Paptist Church',
  fromChurch :'Church of the Lord',
  fromCity:'Toronto',
  toCity:'Vancouver',
  nameOfFam:'The Mohammadi Family'
};

const ReceiveEmail = () => (
  <div className='big-div'>
    <h2 className='greeting'>Hello {data.toChuch} !</h2>
    <p>The {data.fromChurch}from {data.fromCity} is looking for churches in {data.toCity}to welcome their friends</p>
    <div className='family-info'>
      <img className="photo-family" src="" alt="img" />
      <div>
        <p>Introducing</p>
        <h3>{data.nameOfFam}</h3>
      </div>
    </div>
    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat optio labore dolorem ullam rerum debitis est nisi eaque amet aut delectus a, illum eveniet quam totam sit iure atque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui at deleniti doloremque cumque cupiditate quaerat eaque hic impedit, quo voluptates? Fuga est, eveniet eum nostrum minus dicta error. Atque.</p>
    <p className='confirm'>This newcomer familty is in need of a church that can welcom then and call their home. Is your church willing to be the welcoming church for this family?</p>
    <div className='buttons'>
      <button type='button' className='btn-no'>No</button>
      <button type='button' className='btn-yes'>Yes</button>
    </div>
    <div className='footer'>
      <p>Have question or doubts?</p>
      <p className='contact'>Feel free to contact Sally Green at sallygreens@welcomechurchca or call 647-416-2367.</p>
      <p className='thanks'>Thanks</p>
    </div>
  </div>

);

export default ReceiveEmail;
