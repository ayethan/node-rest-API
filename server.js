const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json

let feedback = []; // In-memory array to store feedback

// GET /status endpoint
app.get('/status', (req, res) => {
  res.json({ message: 'Server is running' });
});

// POST /feedback endpoint
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid or missing email address' });
  }

  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const newFeedback = { name, email, message, timestamp: new Date() };
  feedback.push(newFeedback);
  res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
});

// GET /feedback endpoint (bonus)
app.get('/feedback', (req, res) => {
  res.json(feedback);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
