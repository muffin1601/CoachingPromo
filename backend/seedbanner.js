const mongoose = require('mongoose');
const Slide = require('./models/banner');
const slides = require('./data/banners'); 
require('dotenv').config();

const seedBanners = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });

        await Slide.deleteMany({});
        await Slide.insertMany(slides);

        console.log('Banners seeded successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding banners:', error);
        mongoose.connection.close();
    }
};

seedBanners();