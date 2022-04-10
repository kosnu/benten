import React, { useState } from "react"
import { Config } from "../Config"
import { RectangleImage } from "../RectangleImage"

export function Preview() {
  const [backgroundColor, setBackgroundColor] = useState<string>("333")
  const [width, setWidth] = useState<number>(200)
  const [height, setHeight] = useState<number>(200)
  const [fontTopPartColor, setFontTopPartColor] = useState<string>("0ff")
  const [fontLowPartColor, setFontLowPartColor] = useState<string>("f00")

  return (
    <>
      <RectangleImage
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        fontTopPartColor={fontTopPartColor}
        fontLowPartColor={fontLowPartColor}
      />
      <Config />
    </>
  )
}
