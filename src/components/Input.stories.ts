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
};

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputElement = canvas.getByTestId("myInput");
    fireEvent.change(inputElement, { target: { value: "Input value" } });

    expect(inputElement).toHaveValue("Input value");
  },
};
