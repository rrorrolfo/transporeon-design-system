import ThemeContextProvider from "./context";

import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <ThemeContextProvider>
      <div className="main-app__container">
        <div className="app_container">
          <Header />
          <LoginForm />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
