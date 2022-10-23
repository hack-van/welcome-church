/* eslint-disable no-console */
/* eslint-disable indent */
// Import path module
const path = require('path');

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite');

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
});

knex.schema
  .hasTable('churches')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('churches', (table) => {
          table.increments('church_id').primary();
          table.string('name');
          table.string('address');
          table.string('city');
          table.string('province');
          table.string('contact_person_name');
          table.string('contact_person_email');
          table.string('church_status');
          table.string('denomination');
          table.string('languages');
        })
        .then(() => {
          // Log success message
          console.log('Table \'Applications\' created');
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
      }

      return false;
    })
    .then(() => {
      // Log success message
      console.log('done');
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`);
    });

  // Create a table in the database called "applications"
  // knex.schema
  //   // Make sure no "applications" table exists
  //   // before trying to create new
  //   .hasTable('applications')
  //     .then((exists) => {
  //       if (!exists) {
  //         // If no "applications" table exists
  //         // create new, with "id", "author", "title",
  //         // "pubDate" and "rating" columns
  //         // and use "id" as a primary identification
  //         // and increment "id" with every new record (application)
  //         return knex.schema.createTable('applications', (table) => {
  //           table.increments('id').primary();
  //           table.string('author');
  //           table.string('title');
  //           table.string('pubDate');
  //           table.integer('rating');
  //         })
  //         .then(() => {
  //           // Log success message
  //           console.log('Table \'Applications\' created');
  //         })
  //         .catch((error) => {
  //           console.error(`There was an error creating table: ${error}`);
  //         });
  //       }

  //       return false;
  //     })
  //     .then(() => {
  //       // Log success message
  //       console.log('done');
  //     })
  //     .catch((error) => {
  //       console.error(`There was a error setting up the database: ${error}`);
  //     });

// Just for debugging purposes:
// Log all data in "applications" table
knex.select('*').from('churches')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err));

// Export the database
module.exports = knex;
