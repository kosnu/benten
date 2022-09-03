import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ColorSelect } from "./ColorSelect"

export default {
  title: "Lib/ColorSelect",
  component: ColorSelect,
} as ComponentMeta<typeof ColorSelect>

export const Default: ComponentStoryObj<typeof ColorSelect> = {
  args: {
    label: "カラーコード",
  },
  storyName: "Default",
}
