export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input = ({ id }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>label</label>
      <input type="text" id={id} data-testid={id} name={id} />
    </div>
  );
};

export default Input;
