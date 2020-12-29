/**
 * @name TicketDisplay
 * @desc Left-hand side of View Tickets page.  Displays individual submitted tickets.
 */

import React from 'react';
import Ticket from './Ticket';

export default function TicketDisplay({ tickets, setActiveTicket, filter }) {
  const ticketsArray = [];
  for (const ticket of tickets) {
    if (filter === 'all') {
      ticketsArray.push(<Ticket key={ticket._id} details={ticket} setActiveTicket={setActiveTicket} />);
    } else {
      if (ticket.status === filter)
        ticketsArray.push(<Ticket key={ticket._id} details={ticket} setActiveTicket={setActiveTicket} />);
    }
  }
  return <div style={{ height: '100%', marginLeft: '3rem', overflowY: 'auto' }}>{ticketsArray}</div>;
}
