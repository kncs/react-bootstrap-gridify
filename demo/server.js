const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use('/', express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
