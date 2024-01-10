import Checkbox from "./Checkbox";
import "./checkboxGoup.css";

import { CloseIcon } from "../assets";
import { useThemeContext } from "../context/hooks";

export type CheckboxType = {
  checked: boolean;
  helperMessage?: string;
  labelText?: string;
  id: string | undefined;
};

export type CheckboxGroupProps = {
  title?: string;
  infoText?: string;
  checkboxes: CheckboxType[];
  disableAll?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxGroup = ({
  title = "",
  infoText = "",
  checkboxes = [],
  disableAll = false,
  hasError = false,
  errorMessage = "",
  required = false,
  onChange,
}: CheckboxGroupProps) => {
  const { theme } = useThemeContext();
  return (
    <>
      <fieldset
        className={`checkboxgroup__container ${disableAll ? "disabled" : ""}`}
      >
        {title && (
          <legend
            className={`checkboxgroup__title ${hasError ? "" : theme} ${
              required ? "required" : ""
            } ${hasError ? "error-text-color" : ""}`}
          >
            {title}
          </legend>
        )}
        {hasError && (
          <span className="checkboxgroup__error-message error-text-color">
            <CloseIcon fillColor="#e82d5a" />
            <span data-testid="error-message">{errorMessage}</span>
          </span>
        )}
        {infoText && (
          <span className={`checkboxgroup__info-text ${theme}`}>
            {infoText}
          </span>
        )}
        {checkboxes.map((props) => (
          <Checkbox
            key={props.id}
            onChange={onChange}
            disabled={disableAll}
            {...props}
          />
        ))}
      </fieldset>
    </>
  );
};

export default CheckboxGroup;
