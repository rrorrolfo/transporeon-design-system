import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Input, { InputProps } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Input component includes a label, input, and help text.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: InputProps = {
  id: "myInput",
  hideLabel: false,
  labelText: "Label",
  showHelpMessage: false,
  helpMessage: "Helpful text for further explaining the Label",
  disabled: false,
  value: "Input value",
  onChange: () => {},
};

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText, value } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.getByLabelText(labelText as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).not.toBeDisabled();
    await expect(inputElement).toHaveValue(value);

    await expect(labelElement).toBeInTheDocument();

    await fireEvent.change(inputElement, { target: { value: "Input value" } });

    await expect(inputElement).toHaveValue("Input value");
  },
};

export const LabelHidden: Story = {
  args: { ...defaultArgs, hideLabel: true, showHelpMessage: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.queryByLabelText(labelText as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).not.toBeDisabled();

    await expect(labelElement).not.toBeInTheDocument();
  },
};

export const WithHelpMessage: Story = {
  args: { ...defaultArgs, showHelpMessage: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText, helpMessage } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.getByLabelText(labelText as string);
    const messageElement = canvas.getByText(helpMessage as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).not.toBeDisabled();

    await expect(labelElement).toBeInTheDocument();
    await expect(messageElement).toBeInTheDocument();
  },
};

export const InputOnly: Story = {
  args: { ...defaultArgs, hideLabel: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.queryByLabelText(labelText as string);

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).not.toBeDisabled();

    await expect(labelElement).not.toBeInTheDocument();
  },
};

export const Invalid: Story = {
  args: { ...defaultArgs, invalid: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id, labelText, helpMessage } = defaultArgs;

    const inputElement = canvas.getByTestId(id);
    const labelElement = canvas.getByLabelText(labelText as string);
    const messageElement = canvas.getByText(helpMessage as string);

    await expect(inputElement.getAttribute("class")).toMatch(/error-border/gi);
    await expect(messageElement.getAttribute("class")).toMatch(
      /error-text-color/gi
    );

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).not.toBeDisabled();

    await expect(labelElement).toBeInTheDocument();
    await expect(messageElement).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: { ...defaultArgs, disabled: true, showHelpMessage: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { id } = defaultArgs;

    const inputElement = canvas.getByTestId(id);

    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toBeDisabled();
  },
};
