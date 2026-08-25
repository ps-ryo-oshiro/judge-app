const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// エンドポイントルーティング
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html'));
});

app.get('/admin/teams', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'teams', 'index.html'));
});

app.get('/display', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'display', 'index.html'));
});

app.get('/judge', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'judge', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
