const Trip = require('../models/Trip');

// GET trips by userId
const getTrips = async (req, res) => {
  try {
    const { userId } = req.params;
    const trips = await Trip.find({ userId });
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ message: 'Failed to get trips' });
  }
};

// POST: Create a new trip
const createTrip = async (req, res) => {
  try {
    const { userId, tripName, destination, startDate, endDate, activities } = req.body;

    const newTrip = new Trip({
      userId,
      tripName,
      destination,
      startDate,
      endDate,
      activities: activities || [],
    });

    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    console.error('Error creating trip:', err);
    res.status(500).json({ message: 'Failed to create trip' });
  }
};

module.exports = {
  getTrips,
  createTrip,
};
