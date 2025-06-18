const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Trip = require('./models/Trip'); // Adjust if your Trip model is in a different path

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');

    const trips = await Trip.find();
    console.log(`📦 Found ${trips.length} trip(s):`);
    console.log(trips);

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ Error:', err);
  });
