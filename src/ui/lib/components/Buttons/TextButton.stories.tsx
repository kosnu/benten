import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { TextButton } from "./TextButton"

export default {
  title: "Lib/Buttons/TextButton",
  component: TextButton,
} as ComponentMeta<typeof TextButton>

export const SSize: ComponentStoryObj<typeof TextButton> = {
  args: {
    children: "BUTTON",
    size: "s",
  },
  storyName: "S サイズ",
}

export const MSize: ComponentStoryObj<typeof TextButton> = {
  args: {
    children: "BUTTON",
    size: "m",
  },
  storyName: "M サイズ",
}

export const LSize: ComponentStoryObj<typeof TextButton> = {
  args: {
    children: "BUTTON",
    size: "l",
  },
  storyName: "L サイズ",
}
