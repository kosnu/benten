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
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: fontColor }}>{`${width}x${height}`}</p>
        </div>
      </div>
    </>
  )
}
