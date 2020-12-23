import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Ticket from './components/Ticket';
import TicketForm from './components/TicketForm';
import ViewTickets from './components/ViewTickets';

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  return (
    // React Router boilerplate code
    <div className="container-fluid">
    <Router>
        <div className="row ml-3">
          <ul className="list-inline">
            <li className='list-inline-item mr-3'><Link to="/">New Ticket</Link></li>
            <li className='list-inline-item'><Link to='/viewtickets'>View Tickets</Link></li>
          </ul>
        </div>
        <div className="container">
        <Switch>
          <Route exact path="/" component={TicketForm} />
          <Route path="/viewtickets" component={ViewTickets} />
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;