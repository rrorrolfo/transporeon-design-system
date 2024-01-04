interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  ...props
}: CheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        role="checkbox"
        aria-label="checkbox"
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <label htmlFor="checkbox">Checkbox</label>
    </div>
  );
};

export default Checkbox;
