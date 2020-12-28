/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */
//create an Accept button to handle ticket
//on acceptance, button triggers notification that ticket has been accepted
//create a 
 import React, { Component } from 'react'
 import axios from 'axios';
 
 export default class TicketDetail extends Component {
//this.props.tickets that displays all item information
//tickets.(whatever item)
    constructor(props){
        super(props)
        
        this.updateStatus = this.updateStatus.bind(this);
    }

    async updateStatus() {
        // axios put request... pass id, status
        try {
            const body = JSON.stringify({ id : this.props.ticket._id, status : 'resolved' });
            await axios.patch('/api/resolveTicket', body, {
              headers: { 'content-type': 'application/json' },
            }).then((data) => console.log(data))
        } catch(err) {
            console.log(err)
        }
    }
    
     render() {
         return (
             <div className="ticketDetail" >
                 <p>{this.props.ticket.student}</p>
                 <p>{this.props.ticket.problem}</p>
                 <p>{this.props.ticket.expectations}</p>
                 <p>{this.props.ticket.tried}</p>
                 <p>{this.props.ticket.notWorking}</p>
                 <p>{this.props.ticket.zoom}</p>
                 <button onClick={this.updateStatus}>RESOLVE</button>
             </div>
         )
     }
 }
 