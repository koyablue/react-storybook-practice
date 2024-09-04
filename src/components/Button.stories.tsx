import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
// import { action } from "@storybook/addon-actions";

const meta = {
  title: "Common/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
    },
    handleClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "sm",
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "lg",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};
