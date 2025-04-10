require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose'); 
const movieRoutes = require('./routes/movieRoutes'); 
const app = express(); app.use(express.json()); 
console.log(process.env.MONGO_URI); 
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('Connected to MongoDB')) 
    .catch(err => console.error('Failed to connect to MongoDB', err)); 
app.use('/api/movies', movieRoutes); 
const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });