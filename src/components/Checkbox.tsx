import { useState } from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  ...props
}: CheckboxProps) => {
  const [isChecked, toggleIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleIsChecked(e.target.checked);

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        role="checkbox"
        aria-label="checkbox"
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <label htmlFor="checkbox">Checkbox</label>
    </div>
  );
};

export default Checkbox;
