import { useAtom } from "jotai"
import { useCallback } from "react"
import { widthAtom } from "../../state/widthAtom"

export function useWidth() {
  const [width, setWidth] = useAtom(widthAtom)

  const changeWidth = useCallback(
    (width: number) => {
      setWidth(width)
    },
    [setWidth],
  )

  return {
    width: width,
    changeWidth: changeWidth,
  }
}
