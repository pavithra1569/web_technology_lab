const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create (POST)
router.post('/', async (req, res) => {
  try {
    const newUser = new User({ ...req.body, artStyle: req.body["art-style"] });
    await newUser.save();
    res.status(201).send('User registered!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Read all (GET)
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update (PUT)
router.put('/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send('User updated!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
