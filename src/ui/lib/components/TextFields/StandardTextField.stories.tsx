import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { StandardTextField } from "./StandardTextField"

export default {
  title: "Lib/TextField/StandardTextField",
  component: StandardTextField,
} as ComponentMeta<typeof StandardTextField>

export const Default: ComponentStoryObj<typeof StandardTextField> = {
  args: {
    label: "ラベル",
  },
  storyName: "Default",
}
