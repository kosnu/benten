import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { RectangleImage } from "./RectangleImage"

export default {
  title: "Home/RectangleImage",
  component: RectangleImage,
} as ComponentMeta<typeof RectangleImage>

export const Default: ComponentStoryObj<typeof RectangleImage> = {
  args: {
    width: 200,
    height: 200,
    backgroundColor: "#000000",
    fontColor: "#ffffff",
  },
  storyName: "デフォルト",
}
