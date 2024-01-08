import { useState } from "react";

import "./checkbox.css";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  helperMessage?: string;
  labelText?: string;
  id: string | undefined;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  helperMessage = "",
  labelText = "",
  id,
  onChangeCallback,
  ...props
}: CheckboxProps) => {
  const [isChecked, toggleIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeCallback) {
      onChangeCallback(e);
    }

    return toggleIsChecked(e.target.checked);
  };

  return (
    <div className="checkbox__wrapper">
      <label
        className={`checkbox__label ${disabled ? "disabled" : ""}`}
        htmlFor={id}
        data-testid="checkbox-label"
      >
        <input
          type="checkbox"
          name="checkbox"
          role="checkbox"
          id={id}
          aria-label="checkbox"
          aria-checked={`${isChecked}`}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          className={isChecked ? "checked" : ""}
          {...props}
        />
        <span className="checkbox__checkmark"></span>
        <div className="checkbox__content-container">
          {labelText && (
            <span className="checkbox__label-text" data-testid="label-text">
              {labelText}
            </span>
          )}
          {helperMessage && (
            <span
              className="checkbox__helper-message"
              data-testid="helper-message"
            >
              {helperMessage}
            </span>
          )}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
