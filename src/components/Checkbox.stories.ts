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

const defaultArgs = {
  disabled: false,
  checked: false,
  helperMessage: "Contextual help message",
  labelText: "Label",
  id: "myCheckbox",
};

export const Base: Story = {
  args: { ...defaultArgs, id: "testID" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");

    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(checkbox.getAttribute("id")).toMatch("testID");

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

export const WithLabelText: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { labelText } = defaultArgs;

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveTextContent(labelText);
  },
};

export const WithHelpMessage: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const { helperMessage } = defaultArgs;

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    const helperMessageElement = canvas.getByTestId("helper-message");
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();

    await expect(helperMessageElement).toBeInTheDocument();
    await expect(helperMessageElement).toHaveTextContent(helperMessage);
  },
};

export const WithoutHelpMessage: Story = {
  args: {
    ...defaultArgs,
    helperMessage: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox", { name: /checkbox/i });
    const label = canvas.getByTestId("checkbox-label");
    const helperMessage = canvas.queryByTestId("helper-message");

    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(helperMessage).not.toBeInTheDocument();
  },
};

export const Unchecked: Story = {
  args: defaultArgs,
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
  args: { ...defaultArgs, checked: true },
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
    ...defaultArgs,
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
    ...defaultArgs,
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
