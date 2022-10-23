/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
// Import database
const knex = require('../db');

// Retrieve all applicationsTransaction
exports.applicationsTransactionAll = async (req, res) => {
  // Get all applicationsTransaction from database
  await knex
    .select('*') // select all records
    .from('applicationsTransaction') // from 'applicationsTransaction' table
    .then(userData => {
      // Send applicationsTransaction extracted from database in response
      res.json(userData);
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving applicationsTransaction: ${err}` });
    });
};

// Create new application
exports.applicationsTransactionCreate = async (req, res) => {
  // Add new application to database
  await knex('applicationsTransaction')
    .insert({ // insert new record, a application
      'church_id': req.body.church_id,
      'name': req.body.name,
      'address': req.body.address,
      'city': req.body.city,
      'province': req.body.province,
      'contact_person_name': req.body.contact_person_name,
      'contact_person_email': req.body.contact_person_email,
      'church_status': req.body.church_status,
      'denomination': req.body.denomination,
      'languages': req.body.languages,
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
exports.applicationsTransactionDelete = async (req, res) => {
  // Find specific application in the database and remove it
  await knex('applicationsTransaction')
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

// Remove all applicationsTransaction on the list
exports.applicationsTransactionReset = async (req, res) => {
  // Remove all applicationsTransaction from database
  await knex
    .select('*') // select all records
    .from('applicationsTransaction') // from 'applicationsTransaction' table
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
