import { useState } from "react";
import { Button, FormGroup, Modal, Col } from "react-bootstrap";
import { Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import style from "../recipe.module.css";
import { validateContactForm } from "./validateUserLoginForm";

const SignIn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <>
      <Button outline variant="light" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              firstName: "",
              LastName: "",
              email: "",
              feedback: "",
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
          >
            <Form>
              <FormGroup row>
                <Label hmtlFor="firstName">First Name</Label>
                <Col md="10">
                  <Field
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="firstName">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName">Last Name</Label>
                <Col md="10">
                  <Field
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <ErrorMessage name="lastName">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email">Email</Label>
                <Col md="10">
                  <Field
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                </Col>
                <ErrorMessage name="email">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="feedback">Your feedback</Label>
                <Col md="10">
                  <Field
                    className="form-control"
                    as="textarea"
                    name="feedback"
                    rows="12"
                  />
                </Col>
                <ErrorMessage name="feedback">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button
                className={style.modal_btn}
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className={style.modal_btn}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;
