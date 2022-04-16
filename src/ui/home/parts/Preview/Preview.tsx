import React, { useState } from "react"
import { RectangleImage } from "../RectangleImage"
import { usePreview } from "./usePreview"

export function Preview() {
  const { preview } = usePreview()
  const [backgroundColor] = useState<string>("333")
  const [fontTopPartColor] = useState<string>("0ff")
  const [fontLowPartColor] = useState<string>("f00")

  return (
    <>
      <RectangleImage
        backgroundColor={backgroundColor}
        width={preview.width}
        height={preview.height}
        fontTopPartColor={fontTopPartColor}
        fontLowPartColor={fontLowPartColor}
      />
    </>
  )
}
