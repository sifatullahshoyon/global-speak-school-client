import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCart = () => {
  const { user, logOut } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const navigate = useNavigate();

  const fetchWithAuth = async (url, options = {}) => {
    const headers = {
      ...options.headers,
      authorization: `bearer ${token}`,
    };

    try {
      const response = await fetch(url, { ...options, headers });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          toast.error("unauthorized access");
          await logOut();
          navigate("/login");
        }
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      return fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/users?email=${user?.email}`
      );
    },
  });

  return [users, refetch];
};

export default useCart;
