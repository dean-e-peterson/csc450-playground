const express = require('express');
const app = express();
const port = 5000;
const host = 'localhost';

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