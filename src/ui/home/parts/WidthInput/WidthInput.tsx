import React, { useCallback } from "react"

interface WidthInputProps {
  width: number
  onWidthChange: (width: number) => void
}

export function WidthInput({ width, onWidthChange }: WidthInputProps) {
  const handleWidthChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const width = Number(event.target.value)
      onWidthChange(width)
    },
    [onWidthChange],
  )

  return (
    <div>
      <input type={"number"} value={width} onChange={handleWidthChange} />
    </div>
  )
}
