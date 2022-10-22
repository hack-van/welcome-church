/**
 * A fake for the database, to be replaced by the AWS connection.
 */
const dbFake = {
  getAllChurchesAsync: () => {
    const church = JSON.parse(`[
      {
        "app_id": 201,
        "church_id": 101,
        "name": "Applicant Name 1",
        "email": "emal1@email.ca",
        "address": "Address, Toronto ON",
        "phone_number": "647-111-1111",
        "moving_date": "1/27/2021",
        "english_skill": "Intermediate",
        "gender": "Male"
      },
      {
        "app_id": 202,
        "church_id": 102,
        "name": "Applicant Name 2",
        "email": "email2@email.ca",
        "address": "Address, St John's, NL",
        "phone_number": "709-111-1111",
        "moving_date": "6/15/2020",
        "english_skill": "Basic",
        "gender": "Male"
      },
      {
        "app_id": 203,
        "church_id": 103,
        "name": "Applicant Name 3",
        "email": "email3@email.com",
        "address": "Address, Moncton, NB",
        "phone_number": "506-111-1111",
        "moving_date": "12/1/2021",
        "english_skill": "Fluent",
        "gender": "Male"
      }
    ]`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(church);
      }, 1500);
    });
  },

  getAllApplicantsAsync: () => {
    const applicants = JSON.parse(`[
      {
        "app_id": 201,
        "church_id": 101,
        "name": "Applicant Name 1",
        "email": "emal1@email.ca",
        "address": "Address, Toronto ON",
        "phone_number": "647-111-1111",
        "moving_date": "1/27/2021",
        "english_skill": "Intermediate",
        "gender": "Male"
      },
      {
        "app_id": 202,
        "church_id": 102,
        "name": "Applicant Name 2",
        "email": "email2@email.ca",
        "address": "Address, St John's, NL",
        "phone_number": "709-111-1111",
        "moving_date": "6/15/2020",
        "english_skill": "Basic",
        "gender": "Male"
      },
      {
        "app_id": 203,
        "church_id": 103,
        "name": "Applicant Name 3",
        "email": "email3@email.com",
        "address": "Address, Moncton, NB",
        "phone_number": "506-111-1111",
        "moving_date": "12/1/2021",
        "english_skill": "Fluent",
        "gender": "Male"
      }
     ]`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(applicants);
      }, 1500);
    });
  },
};

export default dbFake;
