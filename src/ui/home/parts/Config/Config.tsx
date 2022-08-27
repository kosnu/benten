import React, { useCallback } from "react"
import { UseFormRegister } from "react-hook-form"
import { ConfigForm } from "../../validation"

interface ConfigProps {
  register: UseFormRegister<ConfigForm>
  onResetButtonClick: () => void
  onSaveButtonClick: () => void
}

export function Config({
  register,
  onResetButtonClick,
  onSaveButtonClick,
}: ConfigProps) {
  const handleResetButtonClick = useCallback(() => {
    onResetButtonClick()
  }, [onResetButtonClick])

  const handleSaveButtonClick = useCallback(() => {
    onSaveButtonClick()
  }, [onSaveButtonClick])

  return (
    <>
      <div>
        <input {...register("backgroundColor")} type={"color"} />
        <input
          {...register("width", { valueAsNumber: true })}
          type={"number"}
        />
        <input
          {...register("height", { valueAsNumber: true })}
          type={"number"}
        />
        <input {...register("fontColor")} type={"color"} />
        <div>
          <button onClick={handleResetButtonClick}>Reset</button>
          <button onClick={handleSaveButtonClick}>Save</button>
        </div>
      </div>
    </>
  )
}
