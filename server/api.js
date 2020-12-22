const express = require("express");

const ticketController = require("./controller");

const router = express.Router();

router.post("/newTicket", ticketController.setTicket); //create new ticket

router.get("/getTickets", ticketController.getTickets); //get all tickets to display

router.put("/reviewTicket", ticketController.reviewTicket); //accept a ticket for review: changes status to pending

router.patch("/resolveTicket", ticketController.resolveTicket); //changes status to resolved, this will handle the notes the fellow adds on the ticket once resolved

router.delete("/deleteTicket", ticketController.deleteTicket); //deletes a ticket. This endpoint has not been implemented on client side. Can be added as a future strech feature.

module.exports = router;
