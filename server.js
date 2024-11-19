const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Question 1: Create a GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Basic Server!');
});

// Question 2: Create a POST route
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${Nampeera}. You are ${23} years old.` });
});

// Question 3: Create a route that uses query parameters
app.get('/search', (req, res) => {
  const { query } = req.query;
  res.json({ message: `You searched for: ${query}` });
});

// Question 4: Create a route for handling path parameters
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ID is: ${id}` });
});

// Listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3600}`);
});
