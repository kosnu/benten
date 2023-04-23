import { Meta, StoryObj } from "@storybook/react"
import { ContainedButton } from "./ContainedButton"

const meta: Meta<typeof ContainedButton> = {
  title: "Lib/Buttons/ContainedButton",
  component: ContainedButton,
}

export default meta
type Story = StoryObj<typeof ContainedButton>

export const SSize: Story = {
  args: {
    children: "BUTTON",
    size: "s",
  },
  name: "S サイズ",
}

export const MSize: Story = {
  args: {
    children: "BUTTON",
    size: "m",
  },
  name: "M サイズ",
}

export const LSize: Story = {
  args: {
    children: "BUTTON",
    size: "l",
  },
  name: "L サイズ",
}
