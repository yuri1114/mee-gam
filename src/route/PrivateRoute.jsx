import React from "react";
import PoductDetail from "../page/ProductDetail";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <PoductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
