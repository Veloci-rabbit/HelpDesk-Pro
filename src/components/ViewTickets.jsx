/**
 * @name ViewTickets 
 * @desc Highest component in hierarchy that displays both Ticket Display and Ticket Detail.
 */

// create links to View All, Open, and Resolved
// render Ticket Display Component on left hand side of page
// if ticket from left hand side is clicked, render Ticket Detail Component on right hand side of the page
// create Load More button below Ticket Display Componenet on left hand side


import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TicketDisplay from './TicketDisplay';
import TicketDetail from './TicketDetail';
// import axios from 'axios';


export default class ViewTickets extends Component {
  constructor() {
    super();

    this.state = {
      tickets: [{ _id: 1, studentName: "Test", problem: "Test problem", expectedResult: "Test expected", attemptedSolution: "Test attempted", suspectedIssue: "Test suspected", zoomLink: "Test zoom" },
      { _id: 1, studentName: "Test2", problem: "Test2 problem", expectedResult: "Test2 expected", attemptedSolution: "Test2 attempted", suspectedIssue: "Test2 suspected", zoomLink: "Test2 zoom" },
      { _id: 1, studentName: "Test3", problem: "Test3 problem", expectedResult: "Test3 expected", attemptedSolution: "Test3 attempted", suspectedIssue: "Test3 suspected", zoomLink: "Test3 zoom" }],
      activeTicket: null
    }

    this.setActiveTicket = this.setActiveTicket.bind(this);
  }

  setActiveTicket(ticket) {
    this.setState({
      activeTicket: ticket
    })
  }

  // async componentDidMount() {
  //   // Axios GET request to backend and then { data } to unpack all tickets from response.
  //   const { data } = await axios.get('http://localhost:3000/getTickets');
  //   this.setState({ tickets: data })
  // }

  render() {
    // Conditional logic to display the active ticket if the current state is not null.
    const display = this.state.activeTicket === null ? <div></div> : <TicketDetail ticket={this.state.activeTicket} />

    return (
      <div>
        <div id="leftSide">
          <nav>
            <ul>
              <li><Link to="/viewtickets/all">View All</Link></li>
              <li><Link to="/viewtickets/open">Open</Link></li>
              <li><Link to="/viewtickets/review">Under Review</Link></li>
              <li><Link to="/viewtickets/resolved">Resolved</Link></li>
            </ul>

          </nav>

          <Switch>
            <Route exact path="/viewtickets/all">
              <TicketDisplay filter="all" tickets={this.state.tickets} setActiveTicket={this.setActiveTicket} />
            </Route>
            <Route exact path="/viewtickets/open">
              <TicketDisplay filter="open" tickets={this.state.tickets} />
            </Route>
            <Route exact path="/viewtickets/review">
              <TicketDisplay filter="pending" tickets={this.state.tickets} />
            </Route>
            <Route exact path="/viewtickets/resolved">
              <TicketDisplay filter="resolved" tickets={this.state.tickets} />
            </Route>
          </Switch>
        </div>
        <div id="rightSide">
          {display}
        </div>
      </div>
    )
  }
}
