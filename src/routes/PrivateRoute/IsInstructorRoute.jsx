import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Loader from "../../components/shared/Loader";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../../hooks/useInstructor";

const IsInstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return <Loader />;
  }
  if (user && isInstructor) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default IsInstructorRoute;
