import html2canvas from "html2canvas"
import React, { useCallback } from "react"
import { HeightInput } from "../HeightInput"
import { WidthInput } from "../WidthInput"
import { useHeight } from "./useHeight"
import { useWidth } from "./useWidth"

export function Config() {
  const { width, changeWidth } = useWidth()
  const { height, changeHeight } = useHeight()

  const handleSaveButtonClick = useCallback(async () => {
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
      <div>{/* 背景色 */}</div>
      <WidthInput width={width} onWidthChange={changeWidth} />
      <HeightInput height={height} onHeightChange={changeHeight} />
      <div>{/* 文字上部色 */}</div>
      <div>{/* 文字下部色 */}</div>
      <div>
        <button>Reset</button>
        <button onClick={handleSaveButtonClick}>Save</button>
      </div>
    </>
  )
}
