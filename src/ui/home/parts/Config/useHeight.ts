import { useAtom } from "jotai"
import { useCallback } from "react"
import { heightAtom } from "../../state/heightAtom"

export function useHeight() {
  const [height, setHeight] = useAtom(heightAtom)

  const changeHeight = useCallback(
    (height: number) => {
      setHeight(height)
    },
    [setHeight],
  )

  return {
    height: height,
    changeHeight: changeHeight,
  }
}
