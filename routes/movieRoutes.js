const express = require('express'); 
const router = express.Router(); 
const Movie = require('../models/Movie'); 
router.get('/', async (req, res) => { 
try { const movies = await Movie.find().limit(10); 
        res.json(movies); 
} catch (err) { 
        res.status(500).json({ message: err.message }); 
} 
}); 
router.get('/:title', async (req, res) => { 
try {
const movie = await Movie.findOne({ title: new RegExp(req.params.title, 'i') }); 
if (!movie) return res.status(404).json({ message: 'Movie not found' }); res.json(movie); } 
catch (err) { res.status(500).json({ message: err.message }); 
} }); 

module.exports = router;