import { useContext, useState, useEffect } from "react";
import { ThemeContext } from ".";
import { ThemeOptions } from "../types/types";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Context not found");
  }

  return context;
};

export const useThemeDetector = (): ThemeOptions => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkTheme = getCurrentTheme();

  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
    isDarkTheme ? "dark" : "light"
  );

  const themeListener = (event: MediaQueryListEvent) => {
    setCurrentTheme(event.matches ? "dark" : "light");
  };

  useEffect(() => {
    const checkForDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    checkForDarkTheme.addEventListener("change", themeListener);
    return () => checkForDarkTheme.removeEventListener("change", themeListener);
  }, []);

  return currentTheme;
};
