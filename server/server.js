const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRouter = require('./api.js');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

//The API endpoint will direct all ticket requests such as
//setting newTicket, updating Ticket, and deleting a Ticket to the API router file
app.use('/api', apiRouter);
//This "/" endpoint will render our client side html file
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../src/index.html'));
});
//catch-all route handler--for unknown routes
app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
