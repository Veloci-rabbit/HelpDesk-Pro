/**
 * @name ViewTickets
 * @desc Highest component in hierarchy that displays both Ticket Display and Ticket Detail.
 */

// create links to View All, Open, and Resolved
// render Ticket Display Component on left hand side of page
// if ticket from left hand side is clicked, render Ticket Detail Component on right hand side of the page
// create Load More button below Ticket Display Componenet on left hand side

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TicketDisplay from './TicketDisplay';
import TicketDetail from './TicketDetail';
import axios from 'axios';

export default class ViewTickets extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      activeTicket: null,
    };

    this.setActiveTicket = this.setActiveTicket.bind(this);
  }

  setActiveTicket(ticket) {
    this.setState({
      activeTicket: ticket,
    });
  }

  async componentDidMount() {
    // Axios GET request to backend and then { data } to unpack all tickets from response.
    const { data } = await axios.get('/api/getTickets');
    console.log(data);
    this.setState({ tickets: data });
  }

  render() {
    // Conditional logic to display the active ticket if the current state is not null.
    const display =
      this.state.activeTicket === null ? null : (
        <TicketDetail ticket={this.state.activeTicket} />
      );

    return (
      <div className="row">
        <div id="leftSide" className="col-6">
          <nav className="row">
            <ul className="list-inline">
              <li className="list-inline-item mr-3">
                <Link to="/viewtickets/all">View All</Link>
              </li>
              <li className="list-inline-item mr-3">
                <Link to="/viewtickets/open">Open</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/viewtickets/resolved">Resolved</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/viewtickets/all">
              <TicketDisplay
                filter="all"
                tickets={this.state.tickets}
                setActiveTicket={this.setActiveTicket}
              />
            </Route>
            <Route exact path="/viewtickets/open">
              <TicketDisplay filter="open" tickets={this.state.tickets} />
            </Route>
            <Route exact path="/viewtickets/resolved">
              <TicketDisplay filter="resolved" tickets={this.state.tickets} />
            </Route>
          </Switch>
        </div>
        <div id="rightSide">{display}</div>
      </div>
    );
  }
}
