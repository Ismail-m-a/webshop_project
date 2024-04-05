// Importerar nödvändiga bibliotek och komponenter.
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Form, FormGroup, FormControl as Input, Button, Alert, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  // Hanterar registreringsfel.
  const [registrationError, setRegistrationError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Form submission values:', values); 
      try {
        // Gör ett POST-anrop med användardata till servern för registrering.
        const response = await axios.post('http://localhost:3001/users/register', values);
        console.log('Backend response:', response.data); 
        setRegistrationError(null); // Nollställer eventuella tidigare fel
        navigate('/login') // navigerar till inloggningssidan vid lyckad registrering.
      } catch (error) {
        console.error('Error during registration:', error); 
        setRegistrationError(error.response?.data.message || 'Registration failed'); // error message respons
      } finally {
        setSubmitting(false); // återställ formuläret
      }
    },
  });

  // Renderar registreringsformuläret.
  return (
    <Form as={Container} className="p-3 my-5 d-flex flex-column w-50" onSubmit={formik.handleSubmit}>
      <h2 className="text-center mb-4">Register</h2>
      {registrationError && (
        <Alert variant="danger" role="alert">
          {registrationError}
        </Alert>
      )}
      <FormGroup className="mb-4">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormGroup>
      <FormGroup className="mb-4">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormGroup>
      <Button type="submit" className="mb-4" onClick={(e) => { e.preventDefault(); console.log('Formik handleSubmit:', formik.handleSubmit); formik.handleSubmit(); }}>
        Register
      </Button>

      <div className="text-center">
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </Form>
  );
}

export default Register;
