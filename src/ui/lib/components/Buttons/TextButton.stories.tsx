import { Meta, StoryObj } from "@storybook/react"
import { TextButton } from "./TextButton"

const meta: Meta<typeof TextButton> = {
  title: "Lib/Buttons/TextButton",
  component: TextButton,
}

export default meta
type Story = StoryObj<typeof TextButton>

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
