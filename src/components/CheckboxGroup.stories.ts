import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import CheckboxGroup from "./CheckboxGroup";

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

const defaultArgs = {
  title: "Group title",
  infoText: "Information text",
  checkboxes: [
    {
      id: "1",
      checked: false,
      labelText: "Checkbox 1",
      disabled: false,
      helperMessage: "Contextual helper message",
    },
    {
      id: "2",
      checked: false,
      labelText: "Checkbox 2",
      disabled: false,
      helperMessage: "Contextual helper message",
    },
  ],
};

export const Base: Story = {
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
