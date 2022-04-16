import { atom } from "jotai"
import { fontColorAtom } from "./fontColorAtom"
import { heightAtom } from "./heightAtom"
import { widthAtom } from "./widthAtom"

interface PreviewAtom {
  width: number
  height: number
  fontColor: string
  backgroundColor: string
}

export const previewAtom = atom<PreviewAtom>((get) => {
  const width = get(widthAtom)
  const height = get(heightAtom)
  const fontColor = get(fontColorAtom)

  return {
    width: width,
    height: height,
    fontColor: fontColor,
    backgroundColor: "", // TODO: 背景色
  }
})
