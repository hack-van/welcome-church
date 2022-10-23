// Import express
const express = require('express');

// Import applications-controller
const applicationsRoutes = require('./application-controller');

// Create router
const router = express.Router();

// Add route for GET request to retrieve all application
// In server.js, applications route is specified as '/applications'
// this means that '/all' translates to '/applications/all'
router.get('/all', applicationsRoutes.applicationsAll);

// Add route for POST request to create new application
// In server.js, applications route is specified as '/applications'
// this means that '/create' translates to '/applications/create'
router.post('/create', applicationsRoutes.applicationsCreate);

// Add route for PUT request to delete specific application
// In server.js, applications route is specified as '/applications'
// this means that '/delete' translates to '/applications/delete'
router.put('/delete', applicationsRoutes.applicationsDelete);

// Add route for PUT request to reset applicationshelf list
// In server.js, applications route is specified as '/applications'
// this means that '/reset' translates to '/applications/reset'
router.put('/reset', applicationsRoutes.applicationsReset);

// Export router
module.exports = router;
