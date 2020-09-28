const express = require('express');
const api = require('./api');

const port = 5000;
const host = 'localhost';

const app = express();

// Statically server files under public at /.
app.use(express.static('public'));

// Parse request bodies that are in JSON.
app.use(express.json());

// Routes in other files
app.use('/api', api);

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