const express = require("express");

const ticketController = require("./controller");

const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("Testing API Endpoint");
// });
router.post("/newTicket", ticketController.setTicket); //create new ticket

router.get("/getTickets", ticketController.getTickets); //get all tickets for display

router.put("/reviewTicket", ticketController.reviewTicket); //accept a ticket for review: changes status to pending

router.put("/resolveTicket", ticketController.resolveTicket); //changes status to resolved, adds notes

router.delete("/deleteTicket", ticketController.deleteTicket); //deletes a ticket

module.exports = router;
