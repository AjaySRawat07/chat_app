import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check for JWT in Cookies or LocalStorage
  const initialUserState = Cookies.get("jwt") || localStorage.getItem("chatApp");

  // Parse the initial user state if available
  const [authUser, setAuthUser] = useState(() => {
    try {
      return initialUserState ? JSON.parse(initialUserState) : undefined;
    } catch (error) {
      console.error("Error parsing initial auth state:", error);
      return undefined;
    }
  });

  // Optionally, you can use `useEffect` to sync `authUser` to cookies/localStorage when it changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("chatApp", JSON.stringify(authUser));
      Cookies.set("jwt", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("chatApp");
      Cookies.remove("jwt");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
