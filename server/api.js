const express = require('express');

const { newTicket, getTickets, resolveTicket, login, signup, setSSIDCookie, checkSSIDCookie } = require('./controller');

const router = express.Router();

router.post('/newTicket', newTicket); //create new ticket

router.get('/getTickets', getTickets); //get all tickets to display

router.patch('/resolveTicket', resolveTicket); //changes status to resolved, this will handle the notes the fellow adds on the ticket once resolved

/**
 * Authentication
 */
router.get('/checkuser', checkSSIDCookie)

router.post('/login', login, setSSIDCookie)

router.post('/signup', signup)

module.exports = router;
