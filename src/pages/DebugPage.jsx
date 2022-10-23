import * as React from 'react';
import { getAllChurchesAsync, getAllApplicantsAsync } from '../helper/databaseHelper';
// import Layout from '../components/Layout';

const DebugPage = () => {
  const [churchInfo, setChurchInfo] = React.useState({});
  const [applicants, setApplicants] = React.useState({});

  getAllChurchesAsync()
    .then((data) => setChurchInfo(data));
  getAllApplicantsAsync()
    .then((data) => setApplicants(data));

  return (
    <div>
      <div>
        The church data<br />
        <pre>
          {JSON.stringify(churchInfo, null, 2)}
        </pre>
      </div>
      <div>
        The applicants data<br />
        <pre>
          {JSON.stringify(applicants, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DebugPage;
