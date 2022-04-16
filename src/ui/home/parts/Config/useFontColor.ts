import { useAtom } from "jotai"
import { useCallback } from "react"
import { fontColorAtom } from "../../state/fontColorAtom"

export function useFontColor() {
  const [fontColor, setFontColor] = useAtom(fontColorAtom)

  const changeFontColor = useCallback(
    (color: string) => {
      setFontColor(color)
    },
    [setFontColor],
  )

  return {
    fontColor: fontColor,
    changeFontColor: changeFontColor,
  }
}
