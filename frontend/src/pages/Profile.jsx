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
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Name:</label>
          <div className="p-2 bg-gray-50 rounded border border-gray-200">{user.name}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Email:</label>
          <div className="p-2 bg-gray-50 rounded border border-gray-200">{user.email}</div>
        </div>
        
        <button
          onClick={handleLogout}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;