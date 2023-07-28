import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
// import {useState} from 'react';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().max(35, 'Minimum is 35 Characters.').required('Required').email(),
  password: yup.string().min(8, 'Minimum is 8 Characters.').required('Required'),
  
});

function Login() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <p className='reg-form-heading'>Sign In
      <Link to=""  className='anchor-links'><p>Or Register Account Here</p></Link>
        
      </p>
      
      <Row>
        <Col>
          <Form.Group className="mb-1" controlId="formGridAddress1">
            <FloatingLabel controlId="email" label="Email Address" className="mb-2">
              <Form.Control
                type="email"
                placeholder="Email Address"
                {...formik.getFieldProps('email')}
              />
            </FloatingLabel>
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-1" controlId="formGridAddress1">
          <FloatingLabel controlId="password" label="Password" className="mb-2">
            <Form.Control
              type="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
            />
          </FloatingLabel>
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </Form.Group>
      </Row>
      <p className='reg-form-heading'>
      <Link to="/forgotPassword" className='anchor-links'>
        <p className="text-decoration-none">Forgot Password</p>
      </Link>
      </p>
      <Button  className='text-center' variant="primary" type="submit" on>
        Login
      </Button>
      <Container>
        <Row>
          <Col><hr className="line" /></Col>
          <Col xs={2} className="or-text text-center">Or</Col>
          <Col><hr className="line" /></Col>
        </Row>
    </Container>
    <Container>
      <div className='signIn-with'>
        <p className="text-align-center" >Sign in with</p>
        <p>
          <Stack direction='horizontal' gap={2}>
            <img src="/images/icons8-gmail-48.png" alt="Gmail Icon" />
            <p className='gmail-text'>Gmail Account</p>
          </Stack>
        </p>
      </div>
    </Container>
    </Form>
  );
}

export default Login;
