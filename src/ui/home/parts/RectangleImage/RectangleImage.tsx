import React from "react"

interface RectangleImageProps {
  backgroundColor: string
  width: number
  height: number
  fontTopPartColor: string
  fontLowPartColor: string
}

export function RectangleImage({
  backgroundColor,
  width,
  height,
  fontTopPartColor,
  fontLowPartColor,
}: RectangleImageProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: `#${backgroundColor}`,
          width: width,
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <style jsx>{`
          p {
            background: -webkit-linear-gradient(
              #${fontTopPartColor},
              #${fontLowPartColor}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
        <p>{`${width}x${height}`}</p>
      </div>
    </>
  )
}
