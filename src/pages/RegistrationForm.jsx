import * as React from 'react';

// import Layout from '../components/Layout';

const RegistrationForm = () => {
  return (
    <>
      <link to="./Menu">Return to Menu</link>
      <h1>Submit New Application</h1>
      <p>
        Submitting a new application will email church contact persons in the
        destination area of applicant.
      </p>
      <form>
        <label>
          Applicant Family Name:
          <input type="text" name="name" />
        </label>
        <label>
          Applicant Destination City:
          <input type="text" name="city" />
        </label>
        <label>
          Applicant Description:
          <textarea type="text" name="description" />
        </label>
        <label>
          Attach Applicant Photo:
          <input type="file" name="photo" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <link to="./NewApplication"></link>
      <button>View Existing Applications</button>
    </>
  );
};

export default RegistrationForm;
