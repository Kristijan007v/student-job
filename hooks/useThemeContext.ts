import { createContext, useContext } from "react";

export type ThemeContextType = {
  theme: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export const useThemeContext = () => useContext(ThemeContext);
