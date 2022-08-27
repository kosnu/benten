import React, { useCallback } from "react"
import { Config } from "../Config"
import { RectangleImage } from "../RectangleImage"
import { usePreview } from "./usePreview"

export function Preview() {
  const { register, watch, resetForm, submit } = usePreview()

  const handleResetButtonClick = useCallback(() => {
    resetForm()
  }, [resetForm])

  return (
    <>
      <Config
        register={register}
        onResetButtonClick={handleResetButtonClick}
        onSaveButtonClick={submit}
      />
      <RectangleImage
        backgroundColor={watch("backgroundColor")}
        width={watch("width")}
        height={watch("height")}
        fontColor={watch("fontColor")}
      />
    </>
  )
}
