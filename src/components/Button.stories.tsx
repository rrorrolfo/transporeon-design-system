import { createElement } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Button, { ButtonProps } from "./Button";

import { DoneIcon, ChevronDownIcon } from "../assets";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Basic button that allow users to take actions with a single tap. It comes in three variations: primary, secondary, and tertiary.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ButtonProps = {
  children: "Button",
  priorityStyle: "secondary",
  type: "button",
  disabled: false,
  showLabel: true,
  onClick: () => {},
};

export const Base: Story = {
  args: defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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

export const HiddenLabelAndIconStart: Story = {
  args: {
    ...defaultArgs,
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

export const HiddenLabelAndIconEnd: Story = {
  args: {
    ...defaultArgs,
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

export const HiddenLabelAndIconStartAndIconEnd: Story = {
  args: {
    ...defaultArgs,
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
