import React from "react"

interface RectangleImageProps {
  backgroundColor: string
  width: number
  height: number
  fontColor: string
}

export function RectangleImage({
  backgroundColor,
  width,
  height,
  fontColor,
}: RectangleImageProps) {
  return (
    <>
      <div
        id={"preview-image"}
        style={{
          backgroundColor: `#${backgroundColor}`,
          width: width,
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: fontColor }}>{`${width}x${height}`}</p>
      </div>
    </>
  )
}
