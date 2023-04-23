import { Meta, StoryObj } from "@storybook/react"
import { RectangleImage } from "./RectangleImage"

const meta: Meta<typeof RectangleImage> = {
  title: "Home/RectangleImage",
  component: RectangleImage,
}

export default meta

type Story = StoryObj<typeof RectangleImage>
export const Default: Story = {
  args: {
    width: 200,
    height: 200,
    backgroundColor: "#000000",
    fontColor: "#ffffff",
  },
  name: "デフォルト",
}
