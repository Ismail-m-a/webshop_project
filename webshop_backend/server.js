const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const router = express.Router();


router.use(bodyParser.json());

// Register routes
router.post('/register', (req, res) => {
    const filePath = path.resolve(__dirname, 'user.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' });
        }

        let users;
        try {
            users = JSON.parse(data || '[]');
        } catch (parseError) {
            return res.status(500).json({ error: 'Failed to parse user data' });
        }

        if (users.find(user => user.email === req.body.email)) {
            return res.status(400).json({ error: 'User already exists' });
        }

        users.push(req.body);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write user data' });
            }

            res.status(200).json({ message: 'User registered successfully' });
        });
    });
});

// Cart items routes
router.post('/cart-items', (req, res) => {
    const filePath = path.resolve(__dirname, 'products.json');

    const cartItems = req.body.items; 

    fs.writeFile(filePath, JSON.stringify(cartItems, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save cart items' });
        }

        res.status(200).json({ message: 'Cart items saved successfully' });
    });
});






// login route
router.post('/login', (req, res) => {
    const filePath = path.resolve(__dirname, 'user.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' });
        }

        const users = JSON.parse(data || '[]');
        const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    });
});

module.exports = router;
