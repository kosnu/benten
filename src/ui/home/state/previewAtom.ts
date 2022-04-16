import { atom } from "jotai"
import { heightAtom } from "./heightAtom"
import { widthAtom } from "./widthAtom"

interface PreviewAtom {
  width: number
  height: number
}

export const previewAtom = atom<PreviewAtom>((get) => {
  const width = get(widthAtom)
  const height = get(heightAtom)

  return {
    width: width,
    height: height,
  }
})
