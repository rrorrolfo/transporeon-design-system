import { createContext, useState } from "react";
import { useThemeDetector } from "./hooks";
import { ThemeOptions } from "../types/types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ContextValues = {
  theme: ThemeOptions;
  setTheme?: React.Dispatch<React.SetStateAction<ThemeOptions>>;
};

const getCurrentTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDarkTheme = getCurrentTheme();

export const ThemeContext = createContext<ContextValues>({
  theme: isDarkTheme ? "dark" : "light",
});

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const currentTheme = useThemeDetector();
  const [theme, setTheme] = useState<ThemeOptions>(currentTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
