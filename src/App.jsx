import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Ticket from './components/Ticket';
import TicketForm from './components/TicketForm';
import ViewTickets from './components/ViewTickets';
import Login from './components/Login';

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  const [userName, setuserName] = useState('');
  const [verifiedUser, setverifiedUser] = useState({ status: false });
  return (
    // React Router boilerplate code
    <div className='container-fluid'>
      <Router>
        <div className='d-flex justify-content-between'>
          <ul className='list-inline'>
            <Link className='customLink list-inline-item brand mr-3' to='/'>
              HELPDESK
            </Link>
            <li className='list-inline-item mr-3'>
              <Link className='customLink' to='/'>
                NEW TICKET
              </Link>
            </li>
            <li className='list-inline-item'>
              <Link className='customLink' to='/viewtickets'>
                VIEW TICKETS
              </Link>
            </li>
          </ul>
          <div className='col col-lg-2'>
            {!verifiedUser.status ? (
              <Link className='customLink' to='/login'>
                LOG IN
              </Link>
            ) : (
              <div>Testing Username</div>
            )}
          </div>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={TicketForm} />
            <Route path='/viewtickets' component={ViewTickets} />
            <Route
              path='/login'
              render={(props) => (
                <Login userName={userName} setuserName={setuserName} verifiedUser = {verifiedUser} setverifiedUser ={setverifiedUser}  />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
