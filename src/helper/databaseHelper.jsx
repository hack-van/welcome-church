/* eslint-disable max-len */
/* eslint-disable no-console */
/**
 * @file
 * database_helper.jsx
 *
 * The interface for dealing with the database
 */

import axios from 'axios';
import { resolveConfig } from 'prettier';
import dbFake from './databaseFake/FakeDatabase';

const dbFaker = dbFake;

/**
 * Check that an object has all the keys
 */
const objectHasAllKeys =
  (obj, keysToCheck, checkIsTruthy = false) => keysToCheck
    .every(item => Object.prototype.hasOwnProperty.call(obj, item) && (!checkIsTruthy || obj[item]));

/**
 * Get all the churches in the database
 * @returns array[objects]
 */
export const getAllChurchesAsync = () => dbFaker.getAllChurchesAsync();

/**
 * Get all the applicants in the database
 * @returns array[objects]
 */
export const getAllApplicantsAsync = () => dbFaker.getAllApplicantsAsync();

/**
 * Create an application
 */
export const createApplicationAsync = (data) => {
  if (!objectHasAllKeys(data, [
    'family_name',
    'destination_city',
    'destination_province',
    'arrive_at_city_date',
    'english_proficiency',
    'short_family_description',
  ], true)) {
    console.error('There was an error with the data');
    return Promise.resolve(false);
  }

  return axios.post('http://localhost:4001/applications/create', data);
};
