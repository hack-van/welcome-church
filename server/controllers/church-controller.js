/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
// Import database
const knex = require('../db');

// Retrieve all churches
exports.churchesAll = async (req, res) => {
  // Get all churches from database
  await knex
    .select('*') // select all records
    .from('churches') // from 'churches' table
    .then(churchData => {
      // Send churches extracted from database in response
      res.json(churchData);
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving churches: ${err}` });
    });
};

// Create new application
exports.churchesCreate = async (req, res) => {
  // Add new application to database
  await knex('churches')
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
exports.churchesDelete = async (req, res) => {
  // Find specific application in the database and remove it
  await knex('churches')
    .where('church_id', req.body.church_id) // find correct record based on id
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

// Remove all churches on the list
exports.churchesReset = async (req, res) => {
  // Remove all churches from database
  await knex
    .select('*') // select all records
    .from('churches') // from 'churches' table
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
