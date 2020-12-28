/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */

import React, { Fragment } from 'react';

export default function TicketDetail({ ticket, updateTicketStatus }) {
  return (
    <Fragment>
      <p>{ticket.student}</p>
      <p>{ticket.problem}</p>
      <p>{ticket.expectations}</p>
      <p>{ticket.tried}</p>
      <p>{ticket.notWorking}</p>
      <p>{ticket.zoom}</p>
      <button onClick={() => updateTicketStatus(ticket)}>Resolve</button>
    </Fragment>
  );
}
