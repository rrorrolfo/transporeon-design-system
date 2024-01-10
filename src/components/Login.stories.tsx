import type { Meta, StoryObj } from "@storybook/react";

import App from "../App";

const meta = {
  title: "Login",
  component: App,
  parameters: {
    docs: {
      description: {
        component:
          "Login form created with the components from this design system.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginScreen: Story = {
  args: {},
};
