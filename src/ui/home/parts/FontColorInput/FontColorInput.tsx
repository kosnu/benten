import React, { useCallback } from "react"

interface FontColorInputProps {
  fontColor: string
  onFontColorChange: (color: string) => void
}

export function FontColorInput({
  fontColor,
  onFontColorChange,
}: FontColorInputProps) {
  const handleFontColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const color = event.target.value
      onFontColorChange(color)
    },
    [onFontColorChange],
  )

  return (
    <div>
      <input
        type={"color"}
        value={fontColor}
        onChange={handleFontColorChange}
      />
    </div>
  )
}
