export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  hideLabel?: boolean;
  showHelpMessage?: boolean;
  helpMessage?: string;
  disabled?: boolean;
  value: string;
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
}: InputProps) => {
  return (
    <div>
      {!hideLabel && <label htmlFor={id}>{labelText}</label>}
      <input
        type="text"
        id={id}
        data-testid={id}
        name={id}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={onChange}
        value={value}
      />
      {showHelpMessage && <span data-testid="help-message">{helpMessage}</span>}
    </div>
  );
};

export default Input;
