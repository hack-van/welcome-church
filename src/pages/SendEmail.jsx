import React, { useState } from 'react';

// import Layout from '../components/Layout';

const SendEmail = () => {

  const [inputs, setInputs] = useState({
		churchName: '',
		departName: '',
		destinationName: '',
	});

  const handleServerResponse = useCallback((ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				companyName: '',
				email: '',
				message: '',
			});
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				info: { error: true, msg },
			});
		}
	}, []);

  return (
    <>
						<input
								id='churchName'
								name='churchName'
								required
								type='text'
								placeholder='Church'
								value={inputs.churchName}
						/>
						<input
								id='departName'
								name='departName'
								required
								type='text'
								placeholder='I am here'
								value={inputs.departName}
						/>
						<input
								id='destinationName'
								name='destinationName'
								required
								type='text'
								placeholder='I want to go there'
								value={inputs.destinationName}
						/>
						</>
  )
}

export default SendEmail;
