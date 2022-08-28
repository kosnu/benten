import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { HomePage } from "./HomePage"

export default {
  title: "Home/HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>

export const Default: ComponentStoryObj<typeof HomePage> = {
  args: {},
  storyName: "デフォルト",
}
