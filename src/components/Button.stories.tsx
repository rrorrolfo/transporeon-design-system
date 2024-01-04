import { createElement } from "react";

import { DoneIcon, ChevronDownIcon } from "../assets";

import type { Meta, StoryObj } from "@storybook/react";

import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import Button from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonElement = canvas.getByRole("button", {
      name: "primary-button",
    });

    await expect(buttonElement).toBeInTheDocument();
  },
};

export const Primary: Story = {
  args: {
    priorityStyle: "primary",
    children: "Primary button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonElement = canvas.getByRole("button", {
      name: "primary-button",
    });

    await expect(buttonElement).toBeInTheDocument();
    // Component should have primary class
    await expect(buttonElement.getAttribute("class")).toMatch(/primary/gi);
  },
};

export const Secondary: Story = {
  args: {
    priorityStyle: "secondary",
    children: "Secondary button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonElement = canvas.getByRole("button", {
      name: "primary-button",
    });

    await expect(buttonElement).toBeInTheDocument();
    // Component should have primary class
    await expect(buttonElement.getAttribute("class")).toMatch(/secondary/gi);
  },
};

export const Tertiary: Story = {
  args: {
    priorityStyle: "tertiary",
    children: "Tertiary button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonElement = canvas.getByRole("button", {
      name: "primary-button",
    });

    await expect(buttonElement).toBeInTheDocument();
    // Component should have tertiary class
    await expect(buttonElement.getAttribute("class")).toMatch(/tertiary/gi);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonElement = canvas.getByRole("button", {
      name: "primary-button",
    });

    await expect(buttonElement).toBeInTheDocument();
    await expect(buttonElement).toBeDisabled();
  },
};

export const WithIconStart: Story = {
  args: {
    iconStart: createElement(() => {
      return <DoneIcon />;
    }),
    children: "With icon start",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const startIcon = canvas.getByTestId("button-icon-start");

    await expect(startIcon).toBeInTheDocument();
  },
};

export const WithIconEnd: Story = {
  args: {
    iconEnd: createElement(() => {
      return <DoneIcon />;
    }),
    children: "With icon end",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const endIcon = canvas.getByTestId("button-icon-end");

    await expect(endIcon).toBeInTheDocument();
  },
};

export const HiddenLabel: Story = {
  args: {
    children: "Hidden label",
    showLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonLabel = canvas.queryByTestId("button-label");

    await expect(buttonLabel).not.toBeInTheDocument();
  },
};

export const IconStartAndHiddenLabel: Story = {
  args: {
    children: "Button with icon",
    iconStart: <DoneIcon />,
    showLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const startIcon = canvas.getByTestId("button-icon-start");
    const buttonLabel = canvas.queryByTestId("button-label");

    await expect(startIcon).toBeInTheDocument();
    await expect(buttonLabel).not.toBeInTheDocument();
  },
};

export const IconEndAndHiddenLabel: Story = {
  args: {
    children: "Button with icon",
    iconEnd: <DoneIcon />,
    showLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const endIcon = canvas.getByTestId("button-icon-end");
    const buttonLabel = canvas.queryByTestId("button-label");

    await expect(endIcon).toBeInTheDocument();
    await expect(buttonLabel).not.toBeInTheDocument();
  },
};

export const IconStartAndIconEndAndHiddenLabel: Story = {
  args: {
    children: "Button with icon",
    iconStart: <DoneIcon />,
    iconEnd: <ChevronDownIcon />,
    showLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const startIcon = canvas.getByTestId("button-icon-start");
    const endIcon = canvas.getByTestId("button-icon-end");
    const buttonLabel = canvas.queryByTestId("button-label");

    await expect(startIcon).toBeInTheDocument();
    await expect(endIcon).toBeInTheDocument();
    await expect(buttonLabel).not.toBeInTheDocument();
  },
};
