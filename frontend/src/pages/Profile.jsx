import { useAuth } from "../context/authContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.createdAt}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;