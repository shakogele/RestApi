const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Geolocation Schema

const GeoSchema = new Schema({
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    }
});

// Create Ninja Schema

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
