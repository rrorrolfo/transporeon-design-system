import Input from "./Input";
import "./loginForm.css";
import CheckboxGroup from "./CheckboxGroup";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="form__container">
      <div className="form__title">
        <h1>Welcome to Componento!</h1>
        <p>Give us your credentials and we shall let you pass.</p>
      </div>
      <form>
        <div className="form__inputs-container">
          <Input
            labelText="Email"
            id="email"
            value="testgmail.com"
            onChange={() => {}}
            invalid
            helpMessage="Top-level domain is either missing or incorrect"
          />
          <Input
            labelText="Password"
            id="password"
            value="testgmail.com"
            onChange={() => {}}
            helpMessage="Create a strong password with a mix of letters, number and symbols"
          />
        </div>

        <div className="form__checkboxGroup-container">
          <CheckboxGroup
            checkboxes={[
              {
                id: "1",
                checked: false,
                labelText: "Send me useless newsletter please",
                helperMessage: "Our marketers will thank you, every day",
              },
              {
                id: "2",
                checked: false,
                labelText: "I agree with terms and conditions",
                helperMessage: "Contextual help message",
              },
            ]}
            onChange={() => {}}
            title="Additional"
            hasError
            errorMessage="You need to agree with terms and conditions"
            infoText="Group information text"
          />
        </div>
        <Button priorityStyle="primary">Sign in</Button>
        <span className="form__or-text">or</span>
        <Button priorityStyle="tertiary">Create account</Button>
      </form>
    </div>
  );
};

export default LoginForm;
