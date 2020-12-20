const express = require('express')
const path = require('path');
const app = express()
const PORT = 3000

const apiRouter = require('./api')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../src/index.html'));
});


app.use((req, res) => res.sendStatus(404)); //catch-all route handler--for unknown routes

app.listen(PORT, () => { console.log(`Listening on port ${PORT}... ya bish`); })