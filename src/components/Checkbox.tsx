import { useState } from "react";

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
    <div>
      <label htmlFor={id} data-testid="checkbox-label">
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
          {...props}
        />
        {labelText && <span data-testid="label-text">{labelText}</span>}
        {helperMessage && (
          <span data-testid="helper-message">{helperMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
