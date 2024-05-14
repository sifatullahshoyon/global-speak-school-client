import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Loader from "../../components/shared/Loader";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default AdminRoute;
