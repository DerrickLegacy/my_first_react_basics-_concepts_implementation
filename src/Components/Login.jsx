import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .max(35, "Minimum is 35 Characters.")
    .required("Required")
    .email(),
  password: yup
    .string()
    .min(8, "Minimum is 8 Characters.")
    .required("Required"),
});

function Login({ childToParent }) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <p className="reg-form-heading">
        Sign In <br />
        <div onClick={() => childToParent("register")}>
          <Link className="anchor-links link-decor">
            <strong>Or Register Account Here</strong>
          </Link>
        </div>
      </p>

      <Row>
        <Col>
          <Form.Group className="mb-1" controlId="formGridAddress1">
            <FloatingLabel
              controlId="email"
              label="Email Address"
              className="mb-2"
            >
              <Form.Control
                className="custom-input"
                type="email"
                placeholder="Email Address"
                {...formik.getFieldProps("email")}
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
              className="custom-input"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
          </FloatingLabel>
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </Form.Group>
      </Row>
      <Row>
        <div className="reg-form-heading link-decor">
          <Link to="/forgotPassword" className="anchor-links link-decor">
            <strong>Forgot Password ?</strong>
          </Link>
        </div>
        <div className="login-checkbox link-decor">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
        </div>
        <div className="or-text text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Row>

      <Container>
        <Row>
          <Col>
            <hr className="line" />
          </Col>
          <Col xs={2} className="or-text text-center">
            Or
          </Col>
          <Col>
            <hr className="line" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="signIn-with">
          <p className="text-align-center">Sign in with</p>
          <p>
            <Link to="/" className="link-decor">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Gmial
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <BsEnvelope size={24} style={{ color: "red" }} />
                </InputGroup.Text>
                <Form.Control
                  disabled
                  id="inlineFormInputGroup"
                  placeholder="Gmail"
                />
              </InputGroup>
            </Link>
          </p>
          <p>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              URA Account
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <img
                  src="/images/ura_logo_25.png"
                  style={{ height: "28px" }}
                  alt="URA -LOGO"
                />
              </InputGroup.Text>
              <Form.Control
                disabled
                id="inlineFormInputGroup"
                placeholder="URA Account"
              />
            </InputGroup>
          </p>
        </div>
      </Container>
    </Form>
  );
}

export default Login;
