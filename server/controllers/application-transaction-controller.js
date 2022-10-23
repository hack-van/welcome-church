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
      'appl_id': req.body.appl_id,
      'receiver_church_id': req.body.receiver_church_id,
      'receiver_is_willing': req.body.receiver_is_willing,
      'sender_accepted_receiver': req.body.sender_accepted_receiver,
      'sender_notified_receiver': req.body.sender_notified_receiver,
      'encrypted_file_key': req.body.encrypted_file_key,
      'encrypted_file_download_count': req.body.encrypted_file_download_count,
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
