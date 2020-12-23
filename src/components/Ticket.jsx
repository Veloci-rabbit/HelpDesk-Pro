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
      <div style={{width: '90%', margin: '2rem 0', maxHeight: '7rem', overflowY: 'auto' }} className="card cardCustom" onClick={this.updateActiveTicket}>
      <div className="card-body">
        <h5 className="card-title"> Name: {this.props.details.student}</h5>          
        <p className="card-text"> {this.props.details.problem}</p>      
      </div>
      </div>
    );
  }
}
