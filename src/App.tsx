import "./App.css";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="login-form__container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
