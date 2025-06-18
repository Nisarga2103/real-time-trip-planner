const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Trip = require('./models/Trip');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');

    await User.deleteMany({});
    await Trip.deleteMany({});

    const user = new User({ username: 'testuser', email: 'test@example.com' });
    await user.save();

    const trip1 = new Trip({
      userId: user._id, // very important!
      destination: 'Paris',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-06-10'),
    });

    await trip1.save();

    console.log('✅ Seed data inserted successfully');
    console.log('🧑 Seeded userId:', user._id); // copy this
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Error inserting seed data:', err);
    process.exit(1);
  });
