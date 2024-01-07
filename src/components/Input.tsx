export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  hideLabel?: boolean;
}

const Input = ({ id, hideLabel = false, labelText = "" }: InputProps) => {
  return (
    <div>
      {!hideLabel && <label htmlFor={id}>{labelText}</label>}
      <input type="text" id={id} data-testid={id} name={id} />
    </div>
  );
};

export default Input;
