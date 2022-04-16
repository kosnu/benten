import React, { useCallback } from "react"

interface HeightInputProps {
  height: number
  onHeightChange: (height: number) => void
}

export function HeightInput({ height, onHeightChange }: HeightInputProps) {
  const handleHeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const height = Number(event.target.value)
      onHeightChange(height)
    },
    [onHeightChange],
  )

  return (
    <div>
      <input type={"number"} value={height} onChange={handleHeightChange} />
    </div>
  )
}
