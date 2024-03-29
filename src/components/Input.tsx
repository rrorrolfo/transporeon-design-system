import { CloseIcon } from "../assets";
import { useThemeContext } from "../context/hooks";
import "./input.css";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  hideLabel?: boolean;
  showHelpMessage?: boolean;
  helpMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  hideLabel = false,
  labelText = "",
  showHelpMessage = false,
  helpMessage = "",
  disabled = false,
  value,
  onChange,
  invalid,
  type = "text",
  ...props
}: InputProps) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`input__container pointer-cursor ${
        disabled ? "disabled" : ""
      }`}
    >
      {!hideLabel && (
        <label
          className={`input__label button-gutter pointer-cursor ${
            invalid ? "error-text-color" : theme
          } `}
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <input
        type={type}
        id={id}
        data-testid={id}
        name={id}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={onChange}
        value={value}
        className={`input ${theme} button-gutter pointer-cursor ${
          invalid ? "error-border" : ""
        }`}
        {...props}
      />

      {(showHelpMessage || invalid) && (
        <span
          className={`input__help-message ${
            invalid ? "error-text-color" : theme
          } button-gutter pointer-cursor`}
          data-testid="help-message"
        >
          {invalid && <CloseIcon fillColor="#e82d5a" />}
          {helpMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
