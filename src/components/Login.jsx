import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Login(props) {
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState({status: false});
  ///console.log('props', props);
  /// dconsole.log('setuserName', setuserName);
  function handleClick(e) {
    e.preventDefault();
    
    const checkUser = {
      username : props.userName,
      password,
    };
 
    axios
      .post('/api/login', checkUser, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((data) => {
         props.setverifiedUser({status: true});
          setRedirect({status:true});
          props.setuserName(props.userName.toUpperCase())
     }) //set the state of the status of verified user)
      .catch((error) => console.log(error));
  }
  if (redirect.status) {
    return <Redirect to="/viewtickets" />;
  }
  return (
    <Form className='needs-validation' onSubmit={handleClick}>
      <Form.Group controlId='formUsername'>
        <Form.Label>USERNAME</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter username'
          value={props.userName}
          onChange={(event) => props.setuserName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        {' '}
        Submit{' '}
      </Button>
    </Form>
  );
}
