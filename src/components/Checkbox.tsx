import { useThemeContext } from "../context/hooks";
import "./checkbox.css";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  helperMessage?: string;
  labelText?: string;
  id: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  helperMessage = "",
  labelText = "",
  id,
  onChange,
  ...props
}: CheckboxProps) => {
  const { theme } = useThemeContext();

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
          aria-checked={`${checked}`}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className={checked ? "checked" : ""}
          {...props}
        />
        <span className={`checkbox__checkmark ${theme}`}></span>
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
