/* eslint-disable max-len */
// Import express
const express = require('express');

// Import applicationsTransaction-controller
const applicationsTransactionRoutes = require('../controllers/application-transaction-controller');

// Create router
const router = express.Router();

// Add route for GET request to retrieve all application
// In server.js, applicationsTransaction route is specified as '/applicationsTransaction'
// this means that '/all' translates to '/applicationsTransaction/all'
router.get('/all', applicationsTransactionRoutes.applicationsTransactionAll);

// Add route for POST request to create new application
// In server.js, applicationsTransaction route is specified as '/applicationsTransaction'
// this means that '/create' translates to '/applicationsTransaction/create'
router.post('/create', applicationsTransactionRoutes.applicationsTransactionCreate);

// Add route for PUT request to delete specific application
// In server.js, applicationsTransaction route is specified as '/applicationsTransaction'
// this means that '/delete' translates to '/applicationsTransaction/delete'
router.put('/delete', applicationsTransactionRoutes.applicationsTransactionDelete);

// Add route for PUT request to reset applicationsTransactionhelf list
// In server.js, applicationsTransaction route is specified as '/applicationsTransaction'
// this means that '/reset' translates to '/applicationsTransaction/reset'
router.put('/reset', applicationsTransactionRoutes.applicationsTransactionReset);

// Export router
module.exports = router;
