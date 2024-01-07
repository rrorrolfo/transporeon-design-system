export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  hideLabel?: boolean;
  showHelpMessage?: boolean;
  helpMessage?: string;
}

const Input = ({
  id,
  hideLabel = false,
  labelText = "",
  showHelpMessage = false,
  helpMessage = "",
}: InputProps) => {
  return (
    <div>
      {!hideLabel && <label htmlFor={id}>{labelText}</label>}
      <input type="text" id={id} data-testid={id} name={id} />
      {showHelpMessage && <span data-testid="help-message">{helpMessage}</span>}
    </div>
  );
};

export default Input;
