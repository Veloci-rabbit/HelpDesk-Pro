import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default function Login(props) {
  const [password, setPassword] = useState('');
  console.log('props', props);
  /// dconsole.log('setuserName', setuserName);
  function handleClick(e) {
    e.preventDefault();
    const checkUser = {
      userName,
      password,
    };

    

    //will need to readd after backend has been configured
    // axios
    //   .post('/api/login', checkUser, {
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then((data) => {
    //      props.setverifiedUser({status: true})
    //  console.log(data)
     //} //set the state of the status of verified user)
    //   .catch((error) => console.log(error));
  }
  return (
    <Form className='needs-validation' onSubmit={handleClick}>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter username'
          value={props.userName}
          onChange={(event) => props.setuserName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
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
