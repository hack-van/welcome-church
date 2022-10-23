/**
 * A fake for the database, to be replaced by the AWS connection.
 */

const dbFake = {
  getAllChurchesAsync: () => {
    const church = [
      {
        'church_id': 101,
        'name': 'Church 1',
        'address': 'Address of Church 1',
        'city': 'North York',
        'province': 'ON',
        'contact_person_name': 'Contact Person 1',
        'contact_person_email': 'contact1@email.ca',
        'church_status': 'For_Review',
        'denomination': 'Baptist',
        'languages': ['English', 'French'],
      },
      {
        'church_id': 102,
        'name': 'Church 2',
        'address': 'Address of Church 2',
        'city': 'Toronto',
        'province': 'ON',
        'contact_person_name': 'Contact Person 2',
        'contact_person_email': 'contact2@email.ca',
        'church_status': 'For_Review',
        'denomination': 'Baptist',
        'languages': ['English', 'French'],
      },
      {
        'church_id': 103,
        'name': 'Church 3',
        'address': 'Address of Church 3',
        'city': 'Markham',
        'province': 'ON',
        'contact_person_name': 'Contact Person 3',
        'contact_person_email': 'contact3@email.ca',
        'church_status': 'Approved',
        'denomination': 'Four Square',
        'languages': ['English', 'Chinese'],
      },
      {
        'church_id': 104,
        'name': 'Church 4',
        'address': 'Address of Church 4',
        'city': 'Calgary',
        'province': 'ON',
        'contact_person_name': 'Contact Person 4',
        'contact_person_email': 'contact4@email.ca',
        'church_status': 'Approved',
        'denomination': 'Pentecostal',
        'languages': ['Mandarin', 'French'],
      },
      {
        'church_id': 105,
        'name': 'Church 5',
        'address': 'Address of Church 5',
        'city': 'Barrie',
        'province': 'ON',
        'contact_person_name': 'Contact Person 5',
        'contact_person_email': 'contact5@email.ca',
        'church_status': 'Approved',
        'languages': ['Mandarin', 'French'],
      }
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(church);
      }, 1500);
    });
  },

  getAllApplicantsAsync: () => {
    const applicants = [
      {
        'app_id': 201,
        'church_id': 101,
        'name': 'Applicant Name 1',
        'email': 'emal1@email.ca',
        'address': 'Address, Toronto ON',
        'phone_number': '647-111-1111',
        'moving_date': '1/27/2021',
        'english_skill': 'Intermediate',
        'gender': 'Male'
      },
      {
        'app_id': 202,
        'church_id': 102,
        'name': 'Applicant Name 2',
        'email': 'email2@email.ca',
        'address': 'Address, St John\'s, NL',
        'phone_number': '709-111-1111',
        'moving_date': '6/15/2020',
        'english_skill': 'Basic',
        'gender': 'Male'
      },
      {
        'app_id': 203,
        'church_id': 103,
        'name': 'Applicant Name 3',
        'email': 'email3@email.com',
        'address': 'Address, Moncton, NB',
        'phone_number': '506-111-1111',
        'moving_date': '12/1/2021',
        'english_skill': 'Fluent',
        'gender': 'Male'
      }
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(applicants);
      }, 1500);
    });
  },
};

export default dbFake;
