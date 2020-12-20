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
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">New Ticket</Link></li>
            <li><Link to='/viewtickets'>View Tickets</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={TicketForm} />
          <Route path="/viewtickets" component={ViewTickets} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;