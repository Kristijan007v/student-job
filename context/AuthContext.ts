import { createContext, useContext } from "react";

type AuthContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: AuthContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  authContextDefaultValues
);

export const useAuth = () => useContext(AuthContext);
