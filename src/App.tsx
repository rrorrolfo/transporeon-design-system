import "./App.css";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="main-app__container">
      <div className="app_container">
        <Header />
        <div className="login-form__container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
