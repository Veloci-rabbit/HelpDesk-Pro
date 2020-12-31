/**
 * @name ViewTickets
 * @desc Highest component in hierarchy that displays both Ticket Display and Ticket Detail.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TicketDisplay from './TicketDisplay';
import TicketDetail from './TicketDetail';
import axios from 'axios';

export default class ViewTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      activeTicket: null,
    };

    this.setActiveTicket = this.setActiveTicket.bind(this);
    this.updateTicketStatus = this.updateTicketStatus.bind(this);
  }

  // setActiveTicket method sets the current ticket into this.state.activeTicket.
  // The active ticket will be displayed based on the conditional rendering logic below.
  setActiveTicket(ticket) {
    this.setState({
      activeTicket: ticket,
    });
  }

  async updateTicketStatus(ticket) {
    try {
      const body = JSON.stringify({ id: ticket._id, status: 'Resolved' });
      await axios
        .patch('/api/resolveTicket', body, {
          headers: { 'content-type': 'application/json' },
        })
        .then((data) => console.log(data));
      const { data } = await axios.get('/api/getTickets');
      this.setState({ tickets: data });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    // Axios GET request to backend and then { data } to unpack all tickets from response.
    const { data } = await axios.get('/api/getTickets');
    this.setState({ tickets: data });

  }

  render() {
    // Conditional logic to display the active ticket if the current state is not null.
    const display =
      this.state.activeTicket === null ? null : (
        <TicketDetail verifiedUser={this.props.verifiedUser} ticket={this.state.activeTicket} updateTicketStatus={this.updateTicketStatus} />
      );

    return (
      <div className="row viewTickets">
        <div id="leftSide" className="col-6">
          <div className="row options">
            <span>
              <Link to="/viewtickets/all" className="customLink">
                VIEW ALL
              </Link>
            </span>
            <span>
              <Link to="/viewtickets/open" className="customLink">
                OPEN
              </Link>
            </span>
            <span>
              <Link to="/viewtickets/resolved" className="customLink">
                RESOLVED
              </Link>
            </span>
          </div>
          <div className="row">
            <div className="col">
              <Switch>
                <Route exact path="/viewtickets/all">
                  <TicketDisplay filter="all" tickets={this.state.tickets} setActiveTicket={this.setActiveTicket} />
                </Route>
                <Route exact path="/viewtickets/open">
                  <TicketDisplay filter="Open" tickets={this.state.tickets} setActiveTicket={this.setActiveTicket} />
                </Route>
                <Route exact path="/viewtickets/resolved">
                  <TicketDisplay
                    filter="Resolved"
                    tickets={this.state.tickets}
                    setActiveTicket={this.setActiveTicket}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <div id="rightSide" className="col-6">
          {display}
        </div>
      </div>
    );
  }
}
