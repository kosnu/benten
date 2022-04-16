import { useAtom } from "jotai"
import { useCallback } from "react"
import { backgroundColorAtom } from "../../state/backgroundColorAtom"

export function useBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorAtom)

  const changeBackgroundColor = useCallback(
    (color: string) => {
      setBackgroundColor(color)
    },
    [setBackgroundColor],
  )

  return {
    backgroundColor: backgroundColor,
    changeBackgroundColor: changeBackgroundColor,
  }
}
