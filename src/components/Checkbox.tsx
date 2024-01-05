import { useState } from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  helperMessage?: string;
  labelText?: string;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  helperMessage = "",
  labelText = "",
  ...props
}: CheckboxProps) => {
  const [isChecked, toggleIsChecked] = useState(checked);

  const handleClick = () => toggleIsChecked((isChecked) => !isChecked);

  return (
    <div>
      <label
        htmlFor="checkbox"
        onClick={handleClick}
        data-testid="checkbox-label"
      >
        <input
          type="checkbox"
          name="checkbox"
          role="checkbox"
          aria-label="checkbox"
          aria-checked={`${isChecked}`}
          disabled={disabled}
          checked={isChecked}
          {...props}
        />
        {labelText}
      </label>
      {helperMessage && (
        <span data-testid="helper-message">{helperMessage}</span>
      )}
    </div>
  );
};

export default Checkbox;
