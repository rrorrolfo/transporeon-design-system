import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/components/button.css";
import "../src/components/checkboxGoup.css";
import "../src/components/checkbox.css";
import "../src/components/input.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
