const mongoose = require('mongoose'); 
const movieSchema = new mongoose.Schema({ title: String, year: Number, genres: [String], runtime: Number, plot: String, rated: String }, { collection: 'movies' }); 
module.exports = mongoose.model('Movie', movieSchema);