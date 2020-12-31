const TicketForm = require('./Model'); // import mongodb
const dbSQL = require('./SQLmodel') // import postgresdb
const bcrypt = require('bcrypt'); // import encryption library

//setTicket will create a new Ticket in our DB. Please Note: Not all fields are required, check schema
exports.newTicket = (req, res) => {
  const { status, student, problem, fellow, expectations, tried, notWorking, zoom, resolvedNotes } = req.body;
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
        console.log('Error creating new ticket:', err);
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    }
  );
};
//getTickets will retrieve an array of Tickets that are stored in our DB. Status veries per Ticket. Front End handles filtering
exports.getTickets = (req, res) => {
  TicketForm.find({}, (err, results) => {
    if (err) {
      console.log('Error finding tickets:', err);
      return res.status(500).json(err);
    }
    return res.status(200).json(results);
  });
};

exports.resolveTicket = (req, res) => {
  //resolveTicket needs: ticket ID and status
  const { id, status } = req.body;
  TicketForm.findOneAndUpdate({ _id: id }, { status }, { new: true, useFindAndModify: false }, (err, result) => {
    if (!result) {
      console.log('Could not update the Ticket ', err);
      return res.status(500).send(err);
    }
    //the result should be the updated version of the ticket you updated
    return res.status(200).json(`Ticket has been resolved. Ticket Info: ${result}`);
  });
};

/**
 * Authentiction & Authorization
 */

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  const findQuery = `SELECT * FROM users WHERE username = $1`
  dbSQL.query(findQuery, [username])
    .then((data) => {
      const hashedPassword = data.rows[0].password;
      bcrypt.compare(password, hashedPassword)
        .then((result) => {
          if (result) {
            // console.log('from login', username);
            res.locals.username = username;
            return next();
          } else {
            res.status(404).json({ error: 'User not found' });
          }
        })
    })
    .catch((err) => console.log(err));

}

exports.signup = (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log('Error in bcrypting password');
      res.status(500).send(err);
    }
    console.log('Encrypted successfully')
    const createQuery = 'INSERT INTO users(username, password) VALUES($1, $2)'
    dbSQL.query(createQuery, [username, hash], (error, response) => {
      if (error) {
        console.log('Error in storing encrypted information in dbSQL');
        res.status(500).send(error);
      }
      res.sendStatus(200);
    })
  })
}

exports.setSSIDCookie = (req, res, next) => {
  const { username } = res.locals;
  console.log(res.locals)
  console.log('from setSSIDCookie', username);
  res.cookie('ssid', username, { httpOnly: true, expires: 0 }).json(username);
}

exports.checkSSIDCookie = (req, res) => {
  const { ssid } = req.cookies;
  const findQuery = `SELECT * FROM users WHERE username = $1`
  dbSQL.query(findQuery, [ssid])
    .then((result) => {
      res.status(200).json({
        verifiedUser: true,
      })
    })
    .catch((err) => {
      console.log('Cookie not found', err)
      res.status(404).json({
        message: "Cookie not found",
        error: err,
      })
    })
}
