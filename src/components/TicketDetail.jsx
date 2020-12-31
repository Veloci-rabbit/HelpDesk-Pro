/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */

import React from 'react';

export default function TicketDetail({verifiedUser, ticket, updateTicketStatus }) {
  return (
    <div className="ticketDetail">
      <p>
        <span className="detailLabel">Student: </span> {ticket.student}
      </p>
      <p>
        <span className="detailLabel">Problem: </span>
        {ticket.problem}
      </p>

      <p>
        <span className="detailLabel">What we expected to happen:</span> {ticket.expectations}
      </p>
      <p>
        <span className="detailLabel">What we've tried: </span> {ticket.tried}
      </p>
      <p>
        <span className="detailLabel">Why we expect it's not working: </span> {ticket.notWorking}
      </p>
      <p>
        <span className="detailLabel">Zoom room: </span>

        <a href="#">{ticket.zoom}</a>
      </p>
      {verifiedUser.status ? <button className="resolveBtn" onClick={() => updateTicketStatus(ticket)}>
        Resolve
      </button> : null}
     
    </div>
  );
}
