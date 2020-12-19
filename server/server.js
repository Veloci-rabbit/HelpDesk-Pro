const express = require('express')
const path = require('path');
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}... ya bish`); })