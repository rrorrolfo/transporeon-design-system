import { createContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeOptions = "light" | "dark";

type ContextValues = {
  theme: ThemeOptions;
  setTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
};

export const ThemeContext = createContext<ContextValues | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeOptions>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
