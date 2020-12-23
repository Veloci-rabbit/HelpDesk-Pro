const TicketForm = require("../server/Model");

const ticketController = {};
//setTicket will create a new Ticket in our DB. Please Note: Not all fields are required, check schema
ticketController.setTicket = (req, res) => {
  const {
    status,
    student,
    problem,
    fellow,
    expectations,
    tried,
    notWorking,
    zoom,
    resolvedNotes,
  } = req.body;
  TicketForm.create(
    {
      status,
      student,
      problem,
      fellow,
      expectations,
      tried,
      notWorking,
      zoom,
      resolvedNotes,
    },
    (err, result) => {
      if (err) {
        console.log("Error creating new ticket:", err);
        return res.status(400).json(err);
      }
      return res.status(200).json(result); //sam says return result? why? for now just send success
    }
  );
};
//getTickets will retrieve an array of Tickets that are stored in our DB. Status veries per Ticket. Front End handles filtering
ticketController.getTickets = (req, res) => {
  TicketForm.find({}, (err, results) => {
    if (err) {
      console.log("Error finding tickets:", err);
      return res.status(500).json(err); //is this the right error code?
    }
    return res.status(200).json(results);
  });
};
//reviewTicket will update the ticket 
ticketController.reviewTicket = (req, res) => {
  const { id, status } = req.body;
  TicketForm.findOneAndUpdate(
    { _id : id },
    { status },
    { new: true },
    (err, result) => {
      if (!result) {
        console.log("Error updating ticket", err);
        return res.status(500).json(err); //is this the right error code?
      }
      return res.status(200).json(result);
    }
  );
};

ticketController.resolveTicket = (req, res) => {
  //will need : ticket ID and status
  //the resolvedNotes key in schema can be implemented here for future stretch feauture
  //for fellow to add notes on how they resolved ticket
  console.log(`you are in resolve ticket controller :${req.body}`);
  const { id, status } = req.body;
  TicketForm.findOneAndUpdate(
    { _id: id },
    { status },
    { new: true, useFindAndModify: false },
    (err, result) => {
      if (!result) {
        console.log("Could not update the Ticket ", err);
        return res.status(500).send(err);
      }
      //the result should be the updated version of the ticket you updated
      return res
        .status(200)
        .send(`Ticket has been resolved. Ticket Info: ${result}`);
    }
  );
};
//this controller is not currently in use, can be added for future stretch features to delete a ticket
ticketController.deleteTicket = (req, res) => {
  const { id } = req.body; //we are using _id to keep the same naming convention as our id stored in mongoose
  TicketForm.findOneAndDelete({ _id : id }, (err, result) => {
    if (!result) {
      console.log("Error deleting the ticket:", err);
      return res.status(500).send(err);
    }
    if (result.deletedCount === 0) {
      return res.status(404).send("No ticket with this ID exists.");
    }
    //the result variable should be the ticket you deleted
    return res
      .status(200)
      .send(`Ticket ${id} deleted. Ticket Info: ${result}`);
  });
};

module.exports = ticketController;
