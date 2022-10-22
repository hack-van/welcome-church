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
  getAllApplicantsAsync: () => dbFaker.getAllApplicantsAsync()
};

export default databaseHelper;
