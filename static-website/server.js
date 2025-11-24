// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files inside "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
