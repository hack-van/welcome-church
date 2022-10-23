/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
// Import database
const knex = require('./db');

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
      'author': req.body.author,
      'title': req.body.title,
      'pubDate': req.body.pubDate,
      'rating': req.body.rating
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
    .where('id', req.body.id) // find correct record based on id
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
