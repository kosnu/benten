import { Meta, StoryObj } from "@storybook/react"
import { HomePage } from "./HomePage"

const meta: Meta<typeof HomePage> = {
  title: "Home/HomePage",
  component: HomePage,
}

export default meta
type Story = StoryObj<typeof HomePage>

export const Default: Story = {
  args: {},
  name: "デフォルト",
}
