const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User'); // Import the User model

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/assignment3', { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes

// Home Route - Display Users
app.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (err) {
        console.error('Error fetching users:', err);
        next(err);
    }
});

// Add User Form
app.get('/add', (req, res) => {
    res.render('form', { user: null });
});

// Create User
app.post('/create', async (req, res, next) => {
    const { name, age, email } = req.body;
    try {
        await User.create({ name, age, email });
        res.redirect('/');
    } catch (err) {
        console.error('Error creating user:', err);
        next(err);
    }
});

// Edit User Form
app.get('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.render('form', { user });
    } catch (err) {
        console.error('Error fetching user:', err);
        next(err);
    }
});

// Update User
app.post('/update/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    try {
        await User.findByIdAndUpdate(id, { name, age, email });
        res.redirect('/');
    } catch (err) {
        console.error('Error updating user:', err);
        next(err);
    }
});

// Delete User
app.post('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting user:', err);
        next(err);
    }
});

// Search Users
app.get('/search', async (req, res, next) => {
    const { query } = req.query;
    try {
        const users = await User.find({ name: { $regex: query, $options: 'i' } });
        res.render('index', { users });
    } catch (err) {
        console.error('Error searching users:', err);
        next(err);
    }
});

// Sort Users
app.get('/sort', async (req, res) => {
    const field = req.query.field || 'name'; // Default sort by name
    try {
        const users = await User.find().sort({ [field]: 1 }); // Ascending order
        res.render('index', { users });
    } catch (err) {
        console.error('Error sorting users:', err);
        res.status(500).send('Error sorting users.');
    }
});


// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke on the server! Check the logs for details.');
});

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
