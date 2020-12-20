/**
 * @name TicketDisplay
 * @desc Left-hand side of View Tickets page.  Displays individual submitted tickets.
 */

 import React, { Component } from 'react'
 import Ticket from './Ticket'
 
 export default class TicketDisplay extends Component {
     constructor(props) {
         super(props);
         this.selectedTicket = this.selectedTicket.bind(this);
     }

     selectedTicket(ticket) {
        this.props.setActiveTicket(ticket);
     }

     render() {
         const tickets = []
         for (const ticket of this.props.tickets) {
            if (this.props.filter === "all") {
                tickets.push(<Ticket details={ticket} selectedTicket={this.selectedTicket}/>)
            }
            else {
                if (ticket.status === this.props.filter) tickets.push(<Ticket details={ticket} selectedTicket={this.selectedTicket}/>)
            }
         }
         return (
             <div>
                {tickets}
             </div>
         )
     }
 }
 