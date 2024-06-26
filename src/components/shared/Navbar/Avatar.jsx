import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUser } from "react-icons/fa";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      className="rounded-full"
      src={user && user?.photoURL ? user?.photoUR : <FaUser />}
      alt="profile"
      height="40"
      width="30"
      title={user?.displayName}
    />
  );
};

export default Avatar;
