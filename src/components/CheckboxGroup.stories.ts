import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";

const meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: CheckboxGroupProps = {
  title: "Group title",
  infoText: "Information text",
  disableAll: false,
  hasError: false,
  errorMessage: "",
  checkboxes: [
    {
      id: "1",
      checked: false,
      labelText: "Checkbox 1",
      helperMessage: "Contextual helper message",
    },
    {
      id: "2",
      checked: false,
      labelText: "Checkbox 2",
      helperMessage: "Contextual helper message",
    },
  ],
};

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { checkboxes } = defaultArgs;

    const checkboxesArray = canvas.getAllByRole("checkbox");

    await expect(checkboxesArray.length).toBe(checkboxes.length);

    checkboxesArray.forEach(async (element) => {
      await expect(element).toBeEnabled();
      await expect(checkboxesArray[0]).not.toBeChecked();
    });
  },
};

export const CheckedGroup: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { checkboxes } = defaultArgs;

    const checkboxesArray = canvas.getAllByRole("checkbox");

    await expect(checkboxesArray.length).toBe(checkboxes.length);

    checkboxesArray.forEach(async (element) => {
      await expect(element).toBeEnabled();
      await fireEvent.click(element);
      await expect(element).toBeChecked();
    });
  },
};

export const AllDisabled: Story = {
  args: { ...defaultArgs, disableAll: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { checkboxes } = defaultArgs;

    const checkboxesArray = canvas.getAllByRole("checkbox");

    await expect(checkboxesArray.length).toBe(checkboxes.length);

    checkboxesArray.forEach(async (element) => {
      await expect(element).toBeDisabled();
    });
  },
};

export const Invalid: Story = {
  args: { ...defaultArgs, hasError: true, errorMessage: "Group error text" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { checkboxes } = defaultArgs;

    const checkboxesArray = canvas.getAllByRole("checkbox");
    const errorMessage = canvas.getByTestId("error-message");

    await expect(checkboxesArray.length).toBe(checkboxes.length);
    await expect(errorMessage).toBeInTheDocument();
    await expect(errorMessage).toHaveTextContent("Group error text");
  },
};
