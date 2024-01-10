import ThemeContextProvider from "./context";

import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { useThemeContext } from "./context/hooks";

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeContextProvider>
      <div className="main-app__container">
        <div className="app_container">
          <Header />
          <div className={`login-form__container ${theme}`}>
            <LoginForm />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
