import { useState } from "react";

import Checkbox from "./Checkbox";

type CheckboxType = {
  disabled: boolean;
  checked: boolean;
  helperMessage?: string;
  labelText?: string;
  id: string | undefined;
};

type CheckboxGroupProps = {
  title?: string;
  infoText?: string;
  checkboxes: CheckboxType[];
};

const CheckboxGroup = ({
  title = "",
  infoText = "",
  checkboxes = [],
}: CheckboxGroupProps) => {
  const [checkboxState, setCheckboxState] = useState(checkboxes);

  const updaterFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetIndex = checkboxState.findIndex(({ id }) => id === e.target.id);
    const updatedData = checkboxState.map((cb, i) => {
      if (i === targetIndex) {
        return {
          ...cb,
          checked: e.target.checked,
          disabled: e.target.disabled,
        };
      }

      return cb;
    });

    return setCheckboxState([...updatedData]);
  };

  return (
    <>
      <fieldset>
        {title && <legend>{title}</legend>}
        {infoText && <span>{infoText}</span>}
        {checkboxState.map((props) => (
          <Checkbox key={props.id} onChangeCallback={updaterFunc} {...props} />
        ))}
      </fieldset>
    </>
  );
};

export default CheckboxGroup;
