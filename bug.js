const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user
  if (!user) {
    return res.status(404).send('User not found');
  }
  // Handle the case where userId is not a number
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  res.send(user);
});