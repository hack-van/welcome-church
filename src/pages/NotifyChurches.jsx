/* eslint-disable no-console */
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

  const fetchChurches = async () => {
    getAllChurchesAsync()
      .then((data) => setChurchesData(data))
      .catch(error => console.error(`There was an error retrieving the book list: ${error}`));
  };

  React.useEffect(() => {
    fetchChurches();
  }, []);

  return (
    <div className="box box-shadow family-profile flex-center">
      <div className="inner-container">
        <h1>{familyName} Family Profile</h1>
        <div className="family-profile__bio display-flex">
          <p>
            <img src="/family-photo-for-2022-10-23-demo.jpg" alt="A placeholder"/>
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
