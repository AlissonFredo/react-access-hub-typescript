import React from "react";

export interface IInput
  extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;

  htmlSize?: number;
  size?: "sm" | "lg";
  plaintext?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | string[] | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: string;
  isValid?: boolean;
  isInvalid?: boolean;
  placeholder: string;
}
