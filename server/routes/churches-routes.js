// Import express
const express = require('express');

// Import churches-controller
const churchesRoutes = require('../controllers/church-controller');

// Create router
const router = express.Router();

// Add route for GET request to retrieve all church
// In server.js, churches route is specified as '/churches'
// this means that '/all' translates to '/churches/all'
router.get('/all', churchesRoutes.churchesAll);

// Add route for POST request to create new church
// In server.js, churches route is specified as '/churches'
// this means that '/create' translates to '/churches/create'
router.post('/create', churchesRoutes.churchesCreate);

// Add route for PUT request to delete specific church
// In server.js, churches route is specified as '/churches'
// this means that '/delete' translates to '/churches/delete'
router.put('/delete', churchesRoutes.churchesDelete);

// Add route for PUT request to reset churcheshelf list
// In server.js, churches route is specified as '/churches'
// this means that '/reset' translates to '/churches/reset'
router.put('/reset', churchesRoutes.churchesReset);

// Export router
module.exports = router;
