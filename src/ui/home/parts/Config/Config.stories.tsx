import { action } from "@storybook/addon-actions"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Config } from "./Config"

export default {
  title: "Home/Config",
  component: Config,
} as ComponentMeta<typeof Config>

export const Default: ComponentStoryObj<typeof Config> = {
  args: {
    // TODO: `register()` を渡すようにする？
    onResetButtonClick: action("reset"),
    onSaveButtonClick: action("save"),
  },
  storyName: "デフォルト",
}
