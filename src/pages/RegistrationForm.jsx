import * as React from 'react';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import TextArea from '../components/shared/TextArea';
import FileUploader from '../components/shared/FileUploader';

const RegistrationForm = () => (
  <div className="box">
    <div className="inner-container">
      <h3>Create a request</h3>
      <p className="description">
        Create a new request for newcomers. Creating a new request will send
        church persons of your choosing an email requesting assistance with the
        newcomer.
      </p>
      <div className="flex-column">
        <InputField
          title="Family Name*"
          placeholder="Enter the family name of the newcomer"
        />
        <InputField
          title="Destination City and Province*"
          placeholder="Enter the city and province the newcomers are going to "
        />
        <InputField
          title="Move out date*"
          placeholder="Enter the move out date"
          type="date"
        />
        <InputField
          title="English Proficiency*"
          placeholder="Enter the english proficiency"
        />
      </div>
      <InputField
        title="Short Family Description*"
        placeholder="Enter a short description about the family"
      />
      <TextArea
        title="Short Family Description*"
        placeholder="Enter a short description about the family"
      />
      <FileUploader title="Upload Picture of Family (Optional)" />
      <Button title="Select Churches" />
    </div>
  </div>
);

export default RegistrationForm;
