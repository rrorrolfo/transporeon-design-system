import { useState } from "react";

import Input from "./Input";
import "./loginForm.css";
import CheckboxGroup, { CheckboxType } from "./CheckboxGroup";
import Button from "./Button";

const LoginForm = () => {
  const [email, setEmail] = useState("aleksander@skafander.c-");
  const [password, setPassword] = useState("password");
  const [checkboxState, setCheckboxState] = useState<CheckboxType[]>([
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
  ]);

  const updateCheckboxesState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetIndex = checkboxState.findIndex(({ id }) => id === e.target.id);
    const updatedData = checkboxState.map((cb, i) => {
      if (i === targetIndex) {
        return {
          ...cb,
          checked: e.target.checked,
          disabled: e.target.disabled,
        };
      }

      return cb;
    });

    return setCheckboxState([...updatedData]);
  };

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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            invalid
            helpMessage="Top-level domain is either missing or incorrect"
            type="email"
          />
          <Input
            labelText="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            showHelpMessage
            helpMessage="Create a strong password with a mix of letters, number and symbols"
          />
        </div>

        <div className="form__checkboxGroup-container">
          <CheckboxGroup
            checkboxes={checkboxState}
            onChange={(e) => {
              updateCheckboxesState(e);
            }}
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
