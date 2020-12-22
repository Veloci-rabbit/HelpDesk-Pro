/**
 * @name TicketForm
 * @user Component that allows user to submit a new ticket request.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class TicketForm extends Component {
  // Create a constructor that will hold state
  constructor() {
    super();
    this.state = {
      studentName: '',
      problem: '',
      expectedResult: '',
      attemptedSolution: '',
      suspectedIssue: '',
      zoomLink: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  async onSubmit(e) {
    e.preventDefault();
    const newTicket = {
      student: this.state.studentName,
      header: 'Static for now',
      status: 'Open',
      expectations: this.state.expectedResult,
      tried: this.state.attemptedSolution,
      notWorking: this.state.suspectedIssue,
      zoom: this.state.zoomLink,
    };

    try {
      const body = JSON.stringify(newTicket);
      //   const headers = { 'Content-Type': 'application/json' };
      await axios.post('/api/newTicket', body, {
        headers: { 'content-type': 'application/json' },
      });
      await this.setState({
        studentName: '',
        problem: '',
        expectedResult: '',
        attemptedSolution: '',
        suspectedIssue: '',
        zoomLink: '',
      });
      toast.success('Success: ticket submitted.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <form
          onSubmit={this.onSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label>
            Student:
            <input
              onChange={this.onChange}
              type="text"
              name="studentName"
              value={this.state.studentName}
            />
          </label>
          <label>
            Problem:
            <input
              onChange={this.onChange}
              type="text"
              name="problem"
              value={this.state.problem}
            />
          </label>
          <label>
            What we expected to happen:
            <input
              onChange={this.onChange}
              type="text"
              name="expectedResult"
              value={this.state.expectedResult}
            />
          </label>
          <label>
            What we've tried:
            <input
              onChange={this.onChange}
              type="text"
              name="attemptedSolution"
              value={this.state.attemptedSolution}
            />
          </label>
          <label>
            Why we expect it's not working:
            <input
              onChange={this.onChange}
              type="text"
              name="suspectedIssue"
              value={this.state.suspectedIssue}
            />
          </label>
          <label>
            Zoom Room:
            <input
              onChange={this.onChange}
              type="text"
              name="zoomLink"
              value={this.state.zoomLink}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
