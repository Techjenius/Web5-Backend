const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Example data (replace with your actual data or database connection)
const developers = [
  { id: 1, name: 'Senior Developer' },
  { id: 2, name: 'Junior Developer 1' },
  { id: 3, name: 'Junior Developer 3' },
  { id: 4, name: 'Junior Developer 4' },
  { id: 5, name: 'Junior Developer 5' },
  // Add more student data as needed
];

// Define a route to get the list of developers
app.get('/api/developers', (req, res) => {
  res.json(developers, { message: 'Hello from the backend!' }, { status: 500 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});
