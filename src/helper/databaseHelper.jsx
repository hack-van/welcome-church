/**
 * @file
 * database_helper.jsx
 *
 * The interface for dealing with the database
 */

import dbFake from './databaseFake/FakeDatabase';

const dbFaker = dbFake;

const databaseHelper = {
  /**
   * Get all the churches in the database
   * @returns array[objects]
   */
  getAllChurchesAsync: () => dbFaker.getAllChurchesAsync(),

  /**
   * Get all the applicants in the database
   * @returns array[objects]
   */
  getAllApplicantsAsync: () => dbFaker.getAllApplicantsAsync(),

  /**
   * Create all of the database tables.
   * Do not run more than once (you must verify is the database is seeded.)
   * @param {DatabaseConnection} db_conn
   */
  buildSQLite3database: async (db) => {
    const resultChurches = db.run(`
      CREATE TABLE IF Churches (
        church_id Primary Key,
        name TEXT NOT NULL, 
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        province TEXT NOT NULL,
        contact_person_name TEXT NOT NULL,
        contact_person_email TEXT NOT NULL,
        church_status Boolean 
        denomination TEXT NOT NULL,
        languages TEXT NOT NULL
      )
    `);

    const resultApplications = db.run(`
      CREATE TABLE IF Applications (
        appl_id Primary Key,
        family_name TEXT NOT NULL,
        destination_city TEXT NOT NULL,
        destination_province TEXT NOT NULL,
        arrive_at_city_date TEXT NOT NULL,
        english_proficiency TEXT NOT NULL,
        short_family_description TEXT NOT NULL,
      )
    `);

    const applicationTransaction = db.run(`
      CREATE TABLE IF Application_Transaction (
        appl_id INT,
        receiver_church_id INT,
        receiver_is_willing INT,
        sender_accepted_receiver INT,
        sender_notified_receiver INT,
        encrypted_file_key TEXT NOT NULL,
        encrypted_file_download_count INT,
        Foreign Key(receiver_church_id) REFERENCES Applicants(appl_id)
          ON DELETE CASCADE ON UPDATE NO ACTION,
        Primary Key(appl_id, recever_church_id)
      )
    `);

    await Promise.map(resultChurches,
      resultApplications, applicationTransaction);
  }
};

export default databaseHelper;
