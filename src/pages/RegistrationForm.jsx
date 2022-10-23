/* eslint-disable no-console */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import TextArea from '../components/shared/TextArea';
import FileUploader from '../components/shared/FileUploader';
import { createApplicationAsync } from '../helper/databaseHelper';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [applicationData, setApplicationData] = React.useState({
    'family_name': '',
    'destination_city': '',
    'destination_province': '',
    'arrive_at_city_date': '',
    'english_proficiency': '',
    'short_family_description': '',
  });

  const handleApplicationCreation = () => {
    createApplicationAsync(applicationData)
      .finally(() => navigate('/select-churches'));
  };

  return (
    <div className="box">
      <div className="inner-container">
        <h3>Create a request</h3>
        <p className="description">
          Create a new request for newcomers. Creating a new request will send
          church persons of your choosing an email requesting assistance with
          the newcomer.
        </p>
        <div className="flex-column">
          <InputField
            title="Family Name*"
            placeholder="Enter the family name of the newcomer"
            onInput={(event) => {
              setApplicationData({
                ...applicationData,
                family_name: event.target.value,
              });
            }}
          />
          <InputField
            title="Destination City"
            name="destination_city"
            placeholder="Enter the citythe newcomers are going to "
            onInput={(event) => {
              setApplicationData({
                ...applicationData,
                destination_city: event.target.value,
              });
            }}
          />
          <InputField
            title="Destination Province"
            name="destination_province"
            placeholder="Enter the province the newcomers are going to "
            onInput={(event) => {
              setApplicationData({
                ...applicationData,
                destination_province: event.target.value,
              });
            }}
          />
          <InputField
            title="Date of Arrival*"
            placeholder="Enter the date of arrival of the family"
            type="date"
            onInput={(event) => {
              setApplicationData({
                ...applicationData,
                arrive_at_city_date: event.target.value,
              });
            }}
          />
          <InputField
            title="English Proficiency*"
            placeholder="Enter the english proficiency"
            onInput={(event) => {
              setApplicationData({
                ...applicationData,
                english_proficiency: event.target.value,
              });
            }}
          />
        </div>
        <TextArea
          title="Short Family Description*"
          placeholder="Enter a short description about the family"
          onInput={(event) => {
            setApplicationData({
              ...applicationData,
              short_family_description: event.target.value,
            });
          }}
        />
        <FileUploader title="Upload Picture of Family (Optional)" />
        <Button
          title="Select Churches"
          onClick={handleApplicationCreation}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
