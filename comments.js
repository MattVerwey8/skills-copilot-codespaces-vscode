// Create web server
// 1. Create a web server
// 2. Listen on port 3000
// 3. When a request is received, respond with a message

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// 3. When a request is received, respond with a message
app.get('/', (req, res) => {
  res.send('Welcome to the web server!');
});

// 4. Respond to a request for comments
// 4.1 Create an array of comments
const comments = [
  { username: 'Alice', comment: 'I love apples' },
  { username: 'Bob', comment: 'Where is the apple tree?' },
  { username: 'Charlie', comment: 'I love apples too' },
];

// 4.2 Respond to a request for comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// 4.3 Respond to a request for a specific comment
app.get('/comments/:username', (req, res) => {
  const username = req.params.username;
  const comment = comments.find(comment => comment.username === username);
  res.send(comment);
});

// 4.4 Respond to a request to add a comment
app.post('/comments', (req, res) => {
  const username = req.body.username;
  const comment = req.body.comment;
  comments.push({ username, comment });
  res.send('Comment added');
});

// 4.5 Respond to a request to delete a comment
app.delete('/comments/:username', (req, res) => {
  const username = req.params.username;
  const index = comments.findIndex(comment => comment.username === username);
  comments.splice(index, 1);
  res.send('Comment deleted');
});

// 4.6 Respond to a request to update a comment
app.put('/comments/:username', (req, res) => {
  const username = req.params.username;
  const comment = req.body.comment;
  const index = comments.findIndex(comment => comment.username === username);
  comments[index].comment = comment;
  res.send('Comment updated');
});