import React from "react"
import { RectangleImage } from "../RectangleImage"
import { usePreview } from "./usePreview"

export function Preview() {
  const { preview } = usePreview()

  return (
    <>
      <RectangleImage
        backgroundColor={preview.backgroundColor}
        width={preview.width}
        height={preview.height}
        fontColor={preview.fontColor}
      />
    </>
  )
}
