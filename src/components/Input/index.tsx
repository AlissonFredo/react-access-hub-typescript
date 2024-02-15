import { RefObject, forwardRef } from "react";
import { Form } from "react-bootstrap";
import { IInput } from "./types";

type RefType =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

const Input = forwardRef(({ label, error, ...rest }: IInput, ref: RefType) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={ref} {...rest} />
      {error && <p className="text-danger mt-2">{error}</p>}
    </Form.Group>
  );
});

export { Input };
