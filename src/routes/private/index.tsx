import { Navigate } from "react-router-dom";
import { IPrivateRoute } from "./types";

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const user = localStorage.getItem("user");

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
