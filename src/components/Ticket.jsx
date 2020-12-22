/**
 * @name Ticket
 * @desc Displays individual tickets in TicketDisplay component.
 */

import React, { Component } from 'react';

export default class Ticket extends Component {
  constructor(props) {
    super(props);

    this.updateActiveTicket = this.updateActiveTicket.bind(this);
  }

  updateActiveTicket() {
    this.props.selectedTicket(this.props.details);
  }

  render() {
    return (
      <div onClick={this.updateActiveTicket}>
        <h1>{this.props.details.student}</h1>
      </div>
    );
  }
}
