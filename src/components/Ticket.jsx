/**
 * @name Ticket
 * @desc Displays individual tickets in TicketDisplay component.
 */

import React from 'react';

export default function Ticket({ details, setActiveTicket }) {
  return (
    <div
      style={{ width: '90%', margin: '2rem 0', maxHeight: '7rem', overflowY: 'auto' }}
      className="card cardCustom"
      onClick={() => setActiveTicket(details)}
    >
      <div className="card-body">
        <h5 className="card-title">
          <span className="detailLabel">Name: </span> {details.student}
        </h5>
        <p className="card-text">
          <span className="detailLabel">Problem: </span> {details.problem}
        </p>
      </div>
    </div>
  );
}
