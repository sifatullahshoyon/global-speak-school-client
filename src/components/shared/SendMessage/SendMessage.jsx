import React, { useEffect } from "react";
import { toast } from "react-toastify";

const SendMessage = ({ message, type }) => {
  useEffect(() => {
    if (message) {
      if (type === "error") {
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (type === "success") {
        toast.success(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }, [message, type]);

  return null;
};

export default SendMessage;
