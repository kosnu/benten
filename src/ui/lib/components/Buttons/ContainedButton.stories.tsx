import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ContainedButton } from "./ContainedButton"

export default {
  title: "Lib/Buttons/ContainedButton",
  component: ContainedButton,
} as ComponentMeta<typeof ContainedButton>

export const SSize: ComponentStoryObj<typeof ContainedButton> = {
  args: {
    children: "BUTTON",
    size: "s",
  },
  storyName: "S サイズ",
}

export const MSize: ComponentStoryObj<typeof ContainedButton> = {
  args: {
    children: "BUTTON",
    size: "m",
  },
  storyName: "M サイズ",
}

export const LSize: ComponentStoryObj<typeof ContainedButton> = {
  args: {
    children: "BUTTON",
    size: "l",
  },
  storyName: "L サイズ",
}
