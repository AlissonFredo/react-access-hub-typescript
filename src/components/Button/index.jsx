import { Button as ButtonBootstrap } from "react-bootstrap";

const Button = ({ title, isCuston = false, ...rest }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-third {
      background-color: #ea464c !important;
      color: #ffffff !important;
    }

    .btn-third:hover {
      background-color: #eb4747 !important;
      color: #ffffff !important;
    }
    `}
      </style>

      <ButtonBootstrap {...rest}>{title}</ButtonBootstrap>
    </>
  );
};

export { Button };
