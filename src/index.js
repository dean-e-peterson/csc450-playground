const express = require('express');
const app = express();
const port = 8080;
const host = '127.0.0.1';

// Statically server files under public at /.
app.use(express.static('public'));

// Parse request bodies that are in JSON.
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.post('/testpost', (req, res) => {
  const { key } = req.body;
  console.log(key);
  res.send('Looks good');
});

app.listen(port, host, () => {
  console.log(`Node listening at http://${host}:${port}`);
});