import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/admin/${user?.email}`,
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

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
