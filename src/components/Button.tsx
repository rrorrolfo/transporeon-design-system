import "./button.css";
import { ButtonTypes, PriorityStyles } from "../types/types";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  priorityStyle?: PriorityStyles;
  type?: ButtonTypes;
}

const Button = ({
  children = "Button",
  priorityStyle = "secondary",
  type = "button",
  ...props
}: ButtonProps) => {
  const className = `button ${priorityStyle}`;
  return (
    <button
      role="button"
      type={type}
      aria-label="primary-button"
      className={className}
      style={{ display: "flex" }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
