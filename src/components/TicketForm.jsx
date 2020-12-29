/**
 * @name TicketForm
 * @user Component that allows user to submit a new ticket request.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class TicketForm extends Component {
  constructor() {
    super();

    // Initial state (empty strings) for the form's input fields.
    this.state = {
      student: '',
      problem: '',
      expectations: '',
      tried: '',
      notWorking: '',
      zoom: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // OnChange event handler that will update state whenever a key is pressed in an input field.
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //OnSubmit event handler on the form that will do a POST request to MongoDB with the current state as the request body.
  async onSubmit(e) {
    e.preventDefault();
    const newTicket = {
      student: this.state.student,
      problem: this.state.problem,
      status: 'Open',
      expectations: this.state.expectations,
      tried: this.state.tried,
      notWorking: this.state.notWorking,
      zoom: this.state.zoom,
    };

    try {
      const body = JSON.stringify(newTicket);
      await axios.post('/api/newTicket', body, {
        headers: { 'content-type': 'application/json' },
      });
      await this.setState({
        student: '',
        problem: '',
        expectations: '',
        tried: '',
        notWorking: '',
        zoom: '',
      });

      // Toast npm package will show a green 'Success' message on the top right upon a successful POST request.
      toast.success('Success: ticket submitted.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <ToastContainer />
          <form onSubmit={this.onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
              STUDENT:
              <input
                className="form-control"
                onChange={this.onChange}
                type="text"
                name="student"
                value={this.state.student}
                required
              />
            </label>
            <label>
              PROBLEM:
              <textarea
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="text"
                name="problem"
                value={this.state.problem}
                required
              />
            </label>
            <label>
              WHAT WE EXPECTED TO HAPPEN:
              <textarea
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="text"
                name="expectations"
                value={this.state.expectations}
                required
              />
            </label>
            <label>
              WHAT WE'VE TRIED:
              <textarea
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="text"
                name="tried"
                value={this.state.tried}
                required
              />
            </label>
            <label>
              WHY WE EXPECT IT'S NOT WORKING:
              <textarea
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="text"
                name="notWorking"
                value={this.state.notWorking}
                required
              />
            </label>
            <label>
              ZOOM ROOM:
              <input
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="text"
                name="zoom"
                value={this.state.zoom}
                required
              />
            </label>
            <button className="btn btn-success" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}
