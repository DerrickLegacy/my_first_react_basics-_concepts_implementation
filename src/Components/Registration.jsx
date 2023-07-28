import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import {useState} from 'react';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  city: '',
  state: '',
  zip: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().max(15, 'Minimum is 15 Characters.').required('Required'),
  lastName: yup.string().max(15, 'Minimum is 15 Characters.').required('Required'),
  email: yup.string().max(35, 'Minimum is 35 Characters.').required('Required').email(),
  password: yup.string().min(8, 'Minimum is 8 Characters.').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().max(10, 'Minimum is 10 Characters.').required('Required'),
  zip: yup.string().max(10, 'Minimum is 10 Characters.').required('Required'),
  state: yup.string().max(10, 'Minimum is 10 Characters.').required('Required'),
});

function Registration() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
          <p className='reg-form-heading'>Registration Form</p>
      <Row className="mb-2">
        <Col md={6}>
          <Form.Group>
            <FloatingLabel controlId="firstName" label="First Name" className="mb-1">
              <Form.Control
                type="text"
                placeholder="name@example.com"
                {...formik.getFieldProps('firstName')}
              />
            </FloatingLabel>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <FloatingLabel controlId="lastname" label="Last Name" className="mb-1">
              <Form.Control
                type="text"
                placeholder="Last Name"
                {...formik.getFieldProps('lastName')}
              />
            </FloatingLabel>
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </Form.Group>
        </Col>
      </Row>
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
      <Row>
        <Form.Group className="mb-1" controlId="formGridAddress1">
          <FloatingLabel controlId="confirmpassword" label="Confirm Password" className="mb-2">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmPassword')}
            />
          </FloatingLabel>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Col md={4}>
          <Form.Group>
            <FloatingLabel controlId="city" label="City" className="mb-1">
              <Form.Control
                type="text"
                placeholder="City"
                {...formik.getFieldProps('city')}
              />
            </FloatingLabel>
            {formik.touched.city && formik.errors.city && (
              <div className="error">{formik.errors.city}</div>
            )}
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <FloatingLabel controlId="state" label="State" className="mb-1">
              <Form.Select aria-label="State" {...formik.getFieldProps('state')}>
                <option value=""></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
              </Form.Select>
            </FloatingLabel>
            {formik.touched.state && formik.errors.state && (
              <div className="error">{formik.errors.state}</div>
            )}
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <FloatingLabel controlId="zip" label="Zip" className="mb-1">
              <Form.Control type="text" placeholder="Zip" {...formik.getFieldProps('zip')} />
            </FloatingLabel>
            {formik.touched.zip && formik.errors.zip && (
              <div className="error">{formik.errors.zip}</div>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Button disabled variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Registration;
