/* eslint-disable no-console */
/* eslint-disable indent */
// Import path module
const path = require('path');

// Get the location of database sqlite file
const dbPath = path.resolve(__dirname, 'db/welcome-church-db.sqlite');

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
          console.log('Table \'Churches\' created');
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

knex.schema
  .hasTable('Applications')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('Applications', (table) => {
          table.increments('appl_id').primary();
          table.string('family_name').notNullable();
          table.string('destination_city');
          table.string('destination_province');
          table.date('arrive_at_city_date');
          table.string('english_proficiency');
          table.string('short_family_description');
        })
        .then(() => {
          console.log('Table \'Applications\' created');
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
      }

      return false;
    })
    .then(() => {
      console.log('done');
    })
    .catch((error) => {
      console.error(`There was a error setting up the database: ${error}`);
    });

knex.schema
  .hasTable('Application_Transactions')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('Application_Transactions', (table) => {
          table.integer('appl_id').notNullable();
          table.integer('receiver_church_id');
          table.integer('receiver_is_willing');
          table.integer('sender_accepted_receiver');
          table.integer('sender_notified_receiver');
          table.integer('encrypted_file_key');
          table.integer('encrypted_file_download_count');
          table.foreign('receiver_church_id')
            .references('appl_id')
            .inTable('Applicants');
          table.primary(['appl_id', 'receiver_church_id']);
        })
        .then(() => {
          console.log('Table \'Application_Transactions\' created');
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
      console.error(`There was a error setting up the database: ${error}`);
    });

// Just for debugging purposes:
// Log all data in "applications" table
knex.select('*').from('churches')
.then(data => console.log('churches data:', data))
.catch(err => console.log(err));

knex.select('*').from('Applications')
  .then(data => console.log('Applications data:', data))
  .catch(err => console.log(err));

knex.select('*').from('Application_Transactions')
.then(data => console.log('Application_Transactions data:', data))
.catch(err => console.log(err));

// Export the database
module.exports = knex;
