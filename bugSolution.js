const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  // Check if userId is a number
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to fetch the user
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});