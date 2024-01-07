import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Input, { InputProps } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: InputProps = {
  id: "myInput",
  hideLabel: false,
  labelText: "Input",
  showHelpMessage: false,
  helpMessage: "Helpful text for further explaining the Label",
};

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.getByLabelText(labelText as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Input value" } });

    await expect(inputElement).toHaveValue("Input value");
  },
};

export const LabelHidden: Story = {
  args: { ...defaultArgs, hideLabel: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.queryByLabelText(labelText as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(labelElement).not.toBeInTheDocument();
  },
};

export const WithHelpMessage: Story = {
  args: { ...defaultArgs, showHelpMessage: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText, helpMessage } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.queryByLabelText(labelText as string);
    const messageElement = canvas.getByText(helpMessage as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(labelElement).toBeInTheDocument();
    await expect(messageElement).toBeInTheDocument();
  },
};
