/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
// Import database
const knex = require('../db');

// Retrieve all applications
exports.applicationsAll = async (req, res) => {
  // Get all applications from database
  await knex
    .select('*') // select all records
    .from('applications') // from 'applications' table
    .then(userData => {
      // Send applications extracted from database in response
      res.json(userData);
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving applications: ${err}` });
    });
};

// Create new application
exports.applicationsCreate = async (req, res) => {
  // Add new application to database
  await knex('applications')
    .insert({ // insert new record, a application
      'appl_id': req.body.appl_id,
      'family_name': req.body.family_name,
      'destination_city': req.body.destination_city,
      'destination_province': req.body.destination_province,
      'arrive_at_city_date': req.body.arrive_at_city_date,
      'english_proficiency': req.body.english_proficiency,
      'short_family_description': req.body.short_family_description,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Application '${req.body.title}' by ${req.body.author} created.` });
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} application: ${err}` });
    });
};

// Remove specific application
exports.applicationsDelete = async (req, res) => {
  // Find specific application in the database and remove it
  await knex('applications')
    .where('appl_id', req.body.appl_id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Application ${req.body.id} deleted.` });
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} application: ${err}` });
    });
};

// Remove all applications on the list
exports.applicationsReset = async (req, res) => {
  // Remove all applications from database
  await knex
    .select('*') // select all records
    .from('applications') // from 'applications' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Application list cleared.' });
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting application list: ${err}.` });
    });
};
