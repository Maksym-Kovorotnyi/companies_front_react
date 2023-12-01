import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  return accessToken ? <Navigate to="/profile" /> : <Outlet />;
};
