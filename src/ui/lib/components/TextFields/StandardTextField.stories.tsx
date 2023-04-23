import { Meta, StoryObj } from "@storybook/react"
import { StandardTextField } from "./StandardTextField"

const meta: Meta<typeof StandardTextField> = {
  title: "Lib/TextField/StandardTextField",
  component: StandardTextField,
}

export default meta
type Story = StoryObj<typeof StandardTextField>

export const Default: Story = {
  args: {
    label: "ラベル",
  },
  name: "Default",
}
