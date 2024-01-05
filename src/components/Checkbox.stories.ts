import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Checkbox from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { disabled: false, checked: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    //default state
    await expect(checkbox).toBeEnabled();
    await expect(checkbox).not.toBeChecked();

    // Check the checkbox
    await fireEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Uncheck the checkbox
    await fireEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};

export const Unchecked: Story = {
  args: { checked: false, disabled: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    await expect(checkbox).toBeEnabled();
    await expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: { checked: true, disabled: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    await expect(checkbox).toBeEnabled();
    await expect(checkbox).toBeChecked();
  },
};

export const UncheckedAndDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    await expect(checkbox).toBeDisabled();
    await expect(checkbox).not.toBeChecked();
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    await expect(checkbox).toBeDisabled();
    await expect(checkbox).toBeChecked();
  },
};