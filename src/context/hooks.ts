import { useContext } from "react";
import { ThemeContext } from ".";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Context not found");
  }

  return context;
};
