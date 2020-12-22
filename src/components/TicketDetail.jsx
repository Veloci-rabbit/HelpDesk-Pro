/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */
//create an Accept button to handle ticket
//on acceptance, button triggers notification that ticket has been accepted
//create a 
 import React, { Component } from 'react'
 
 export default class TicketDetail extends Component {
//this.props.tickets that displays all item information
//tickets.(whatever item)
    constructor(props){
        super(props)
    }
    
     render() {
         return (
             <div>
                 <p>{this.props.ticket.studentName}</p>
                 <p>{this.props.ticket.problem}</p>
                 <p>{this.props.ticket.expectedResult}</p>
                 <p>{this.props.ticket.attemptedSolution}</p>
                 <p>{this.props.ticket.suspectedIssue}</p>
                 <p>{this.props.ticket.zoomLink}</p>
             </div>
         )
     }
 }
 