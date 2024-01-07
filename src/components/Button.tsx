import "./button.css";
import { ButtonTypes, PriorityStyles } from "../types/types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  priorityStyle?: PriorityStyles;
  type?: ButtonTypes;
  disabled?: boolean;
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  showLabel?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children = "Button",
  priorityStyle = "secondary",
  type = "button",
  disabled = false,
  iconStart,
  iconEnd,
  showLabel = true,
  onClick,
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
      onClick={onClick}
      {...props}
    >
      {iconStart && (
        <span className="button__icon-start" data-testid="button-icon-start">
          {iconStart}
        </span>
      )}
      {showLabel && (
        <span className="button__label" data-testid="button-label">
          {children}
        </span>
      )}
      {iconEnd && (
        <span className="button__icon-end" data-testid="button-icon-end">
          {iconEnd}
        </span>
      )}
    </button>
  );
};

export default Button;
