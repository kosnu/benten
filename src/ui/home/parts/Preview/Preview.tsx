import html2canvas from "html2canvas"
import React, { useCallback, useState } from "react"
import { Config } from "../Config"
import { RectangleImage } from "../RectangleImage"

export function Preview() {
  const [backgroundColor, setBackgroundColor] = useState<string>("333")
  const [width, setWidth] = useState<number>(200)
  const [height, setHeight] = useState<number>(200)
  const [fontTopPartColor, setFontTopPartColor] = useState<string>("0ff")
  const [fontLowPartColor, setFontLowPartColor] = useState<string>("f00")

  const handleSaveImage = useCallback(async () => {
    const target = document.getElementById("preview-image")
    if (!target) return

    const canvas = await html2canvas(target)

    const data = canvas.toDataURL("image/png")
    const link = document.createElement("a")

    link.href = data
    link.download = `${width}x${height}.png`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [width, height])

  return (
    <>
      <RectangleImage
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        fontTopPartColor={fontTopPartColor}
        fontLowPartColor={fontLowPartColor}
      />
      <Config onSaveButtonClick={handleSaveImage} />
    </>
  )
}
