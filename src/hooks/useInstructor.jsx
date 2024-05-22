import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const { data: isInstructor = [], isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/instructor/${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
