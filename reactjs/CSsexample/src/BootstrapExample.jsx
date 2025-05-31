import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Stack,Form } from "react-bootstrap";
const BootstrapExample = () => {
  return (
    <div>
      {/* <button className='btn btn-success'>Add</button>
      <button className='btn btn-danger'>Delete</button> */}
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Add
        </Button>
        <Button as="a" variant="success">
          Delete
        </Button>
      </Stack>
     
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <br />
    <h3 className="text-primary">Hello</h3>
    <h3 className="text-secondary">Hello</h3>
    <h3 className="text-light">Hello</h3>
    <h3 className="text-dark">Hello</h3>
    <h3 className="text-info">Hello</h3>
    <h3 className="text-warning">Hello</h3>
    <h3 className="text-success">Hello</h3>
    <h3 className="text-danger">Hello</h3>
    </div>
  );
};

export default BootstrapExample;
