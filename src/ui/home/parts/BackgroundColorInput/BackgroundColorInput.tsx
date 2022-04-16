import React, { useCallback } from "react"

interface BackgroundColorInputProps {
  backgroundColor: string
  onBackgroundColorChange: (color: string) => void
}

export function BackgroundColorInput({
  backgroundColor,
  onBackgroundColorChange,
}: BackgroundColorInputProps) {
  const handleBackgroundColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const color = event.target.value
      onBackgroundColorChange(color)
    },
    [onBackgroundColorChange],
  )

  return (
    <div>
      <input
        type={"color"}
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
    </div>
  )
}
