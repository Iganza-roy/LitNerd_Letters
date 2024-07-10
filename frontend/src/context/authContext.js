// Import necessary libraries for context creation, state management, and HTTP requests

import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create an AuthContext for managing user authentication state
export const AuthContext = createContext();

// Define the AuthContextProvider component for managing context state
export const AuthContextProvider = ({ children }) => {
  // State to store the currently logged-in user information (if any)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Login function to handle user login
  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  // Logout function to handle user logout
  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  // useEffect hook to synchronize currentUser state with localStorage
  useEffect(() => {
    // Whenever currentUser state changes, update localStorage with the new user information (or null for logout)
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]); // Only run when currentUser state changes

  // Return the AuthContext.Provider component, wrapping children components and providing context values
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
