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

  const handleClick = () => toggleIsChecked((isChecked) => !isChecked);

  return (
    <div>
      <label htmlFor="checkbox" onClick={handleClick}>
        <input
          type="checkbox"
          name="checkbox"
          role="checkbox"
          aria-label="checkbox"
          disabled={disabled}
          checked={isChecked}
          {...props}
        />
        Checkbox
      </label>
    </div>
  );
};

export default Checkbox;
