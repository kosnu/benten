import { Meta, StoryObj } from "@storybook/react"
import { ColorSelect } from "./ColorSelect"

const meta: Meta<typeof ColorSelect> = {
  title: "Lib/ColorSelect",
  component: ColorSelect,
}

export default meta
type Story = StoryObj<typeof ColorSelect>

export const Default: Story = {
  args: {
    label: "カラーコード",
  },
  name: "Default",
}
