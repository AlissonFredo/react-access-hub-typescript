import { forwardRef } from "react";
import { Form } from "react-bootstrap";

const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={ref} {...rest} />
      {error && <p className="text-danger mt-2">{error}</p>}
    </Form.Group>
  );
});

export { Input };
