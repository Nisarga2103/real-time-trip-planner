const express = require('express');
const router = express.Router();
const { getTrips, createTrip } = require('../controllers/tripController');

// GET all trips for a specific user
router.get('/:userId', getTrips);

// ✅ POST route to add a new trip
router.post('/', createTrip);

module.exports = router;
