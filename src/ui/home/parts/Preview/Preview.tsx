import React, { useState } from "react"
import { RectangleImage } from "../RectangleImage"
import { usePreview } from "./usePreview"

export function Preview() {
  const { preview } = usePreview()
  const [backgroundColor] = useState<string>("333")

  return (
    <>
      <RectangleImage
        backgroundColor={backgroundColor}
        width={preview.width}
        height={preview.height}
        fontColor={preview.fontColor}
      />
    </>
  )
}
