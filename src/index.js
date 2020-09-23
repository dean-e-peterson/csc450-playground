const express = require('express');
const app = express();
const port = 8080;
const host = '127.0.0.1';

// Statically server files under public at /.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(port, host, () => {
  console.log(`Node listening at http://${host}:${port}`);
});