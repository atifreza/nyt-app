import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.UserReducer);
  return isLoggedIn ? <Outlet /> : <Navigate to="/page_not_found" />
};

export default PrivateRoutes;
