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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleIsChecked(e.target.checked);

  return (
    <div>
      <label htmlFor="mycheckbox" data-testid="checkbox-label">
        <input
          type="checkbox"
          name="checkbox"
          role="checkbox"
          id="mycheckbox"
          aria-label="checkbox"
          aria-checked={`${isChecked}`}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        {labelText && <span data-testid="label-text">{labelText}</span>}
      </label>
      {helperMessage && (
        <span
          data-testid="helper-message"
          onClick={() => toggleIsChecked((prev) => !prev)}
        >
          {helperMessage}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
