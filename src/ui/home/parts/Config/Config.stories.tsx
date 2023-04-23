import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Config } from "./Config"

const meta: Meta<typeof Config> = {
  title: "Home/Config",
  component: Config,
}

export default meta
type Story = StoryObj<typeof Config>

export const Default: Story = {
  args: {
    // TODO: `register()` を渡すようにする？
    onResetButtonClick: action("reset"),
    onSaveButtonClick: action("save"),
  },
  name: "デフォルト",
}
