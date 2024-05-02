import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //read form data
    const formData = new FormData(event.target);

    //conver form data to object
    const userObj = Object.fromEntries(formData.entries())
    // form validation
    if (!userObj.email || !userObj.password) {
      console.log("Please fill out all fields");
      setErrorMessage(
        <div className="alert alert-warning" role="alert">
          Please provide all the required fields !
        </div>
      )
      return;
    }
  }

  return (
    <>{errorMessage}
      <Form Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form >
    </>
  );
}
