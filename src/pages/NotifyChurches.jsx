/* eslint-disable max-len */
import * as React from 'react';
import ApproveChurchTable from '../components/shared/ApproveChurchTable';
import { getAllChurchesAsync } from '../helper/databaseHelper';
import './NotifyChurches.scss';

const NotifyChurches = () => {
  const [familyName, setFamilyName] = React.useState('');
  const [churchesData, setChurchesData] = React.useState([]);

  // TODO: Replace with actual calls
  setTimeout(() => {
    setFamilyName('Family Name');
  }, 800);

  // TODO: Replace with actual calls
  getAllChurchesAsync()
    .then((data) => setChurchesData(data));

  return (
    <div className="box box-shadow family-profile flex-center">
      <div className="inner-container">
        <h1>{familyName} Family Profile</h1>
        <div className="family-profile__bio display-flex">
          <p>
            <img src="https://via.placeholder.com/595x364" alt="A placeholder"/>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar hendrerit nulla vel accumsan. Cras feugiat eleifend sem, vel lobortis leo pretium quis. Donec eget turpis vel felis fringilla molestie sagittis vitae ipsum. Donec accumsan cursus orci ut ullamcorper. Nunc dui risus, consectetur in iaculis sed, posuere sed risus. Vivamus ac nisl egestas massa faucibus aliquet in nec lectus.
          </p>
        </div>
        <div className="approved-church-table">
          <ApproveChurchTable title="Notify Churches" churchesData={churchesData} classNameModfier="notify"/>
        </div>
      </div>
    </div>
  );
};

export default NotifyChurches;
