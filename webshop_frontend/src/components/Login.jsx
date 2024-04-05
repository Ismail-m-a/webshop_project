// Importerar React och nödvändiga bibliotek/komponenter.
import React from 'react';
import axios from 'axios'; // Används för att göra HTTP-anrop till en backend-server.
import { useFormik } from 'formik';
import { Container, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Användarautentiseringskontext, se till att sökvägen är korrekt.

function Login() {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // gör anrop till backend för att logga in
      axios.post(`http://localhost:3001/users/login`, values)
        .then(response => {
          console.log(response.data.message);
          login(); 
          navigate('/'); // Omdirigerar användaren till startsidan efter inloggning.
        })
        .catch(error => {
          console.error(error.response ? error.response.data.message : 'An error occurred');
          // hanterar an error message
        });
    },
  });

  return (
    <Container className="p-3 my-5 d-flex flex-column w-50">
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup className='mb-4'>
          <Form.Label>Email address</Form.Label>
          <FormControl 
            id='email' 
            name='email' 
            type='email' 
            onChange={formik.handleChange} 
            value={formik.values.email} 
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup className='mb-4'>
          <Form.Label>Password</Form.Label>
          <FormControl 
            id='password' 
            name='password' 
            type='password' 
            onChange={formik.handleChange} 
            value={formik.values.password}
            placeholder="Enter your password"
            required 
          />
        </FormGroup>

        <div className="d-flex justify-content-between mx-3 mb-4">
          <Form.Check name='flexCheck' id='flexCheckDefault' label='Remember me' />
          <a href="#!">Forgot password?</a>
        </div>

        <Button type="submit" className="mb-4">Sign in</Button>
      </Form>

      <div className="text-center">
        <p>Not a member? <Link to="/register">Register</Link></p>
        {/* <p>or sign up with:</p> */}

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          {/* Social media buttons placeholders */}
        </div>
      </div>
    </Container>
  );
}

export default Login;
