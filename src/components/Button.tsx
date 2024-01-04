import "./button.css";
import { ButtonTypes, PriorityStyles } from "../types/types";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  priorityStyle?: PriorityStyles;
  type?: ButtonTypes;
  disabled?: boolean;
  iconStart?: React.ReactElement;
}

const Button = ({
  children = "Button",
  priorityStyle = "secondary",
  type = "button",
  disabled = false,
  iconStart,
  ...props
}: ButtonProps) => {
  const className = `button ${priorityStyle}`;
  return (
    <button
      role="button"
      type={type}
      aria-label="primary-button"
      className={className}
      disabled={disabled}
      {...props}
    >
      {iconStart && <span data-testid="button-icon-start">{iconStart}</span>}
      {children}
    </button>
  );
};

export default Button;