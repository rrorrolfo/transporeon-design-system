import { useState } from "react";

import Checkbox from "./Checkbox";

type CheckboxType = {
  checked: boolean;
  helperMessage?: string;
  labelText?: string;
  id: string | undefined;
};

export type CheckboxGroupProps = {
  title?: string;
  infoText?: string;
  checkboxes: CheckboxType[];
  disableAll: boolean;
};

const CheckboxGroup = ({
  title = "",
  infoText = "",
  checkboxes = [],
  disableAll,
}: CheckboxGroupProps) => {
  const [checkboxState, setCheckboxState] = useState(checkboxes);

  const updateCheckboxesState = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <Checkbox
            key={props.id}
            onChangeCallback={updateCheckboxesState}
            disabled={disableAll}
            {...props}
          />
        ))}
      </fieldset>
    </>
  );
};

export default CheckboxGroup;
