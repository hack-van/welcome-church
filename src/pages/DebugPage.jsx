import * as React from 'react';
import databaseHelper from '../helper/databaseHelper';
// import Layout from '../components/Layout';

const DebugPage = () => {
  const db = databaseHelper;

  const [churchInfo, setChurchInfo] = React.useState({});
  const [applicants, setApplicants] = React.useState({});

  db.getAllChurchesAsync()
    .then((data) => setChurchInfo(data));
  db.getAllApplicantsAsync().then((data) => setApplicants(data));

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
