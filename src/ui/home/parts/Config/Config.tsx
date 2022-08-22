import { zodResolver } from "@hookform/resolvers/zod"
import html2canvas from "html2canvas"
import React, { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ConfigForm, configFormSchema } from "../../validation"

export function Config() {
  const { register, handleSubmit, reset } = useForm<ConfigForm>({
    defaultValues: {
      width: 200,
      height: 200,
      fontColor: "#ffffff",
      backgroundColor: "#000000",
    },
    resolver: zodResolver(configFormSchema),
  })

  const handleResetButtonClick = useCallback(() => {
    reset()
  }, [reset])

  const onSubmit: SubmitHandler<ConfigForm> = useCallback(async (data) => {
    const target = document.getElementById("preview-image")
    if (!target) return

    const canvas = await html2canvas(target)

    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")

    link.href = image
    link.download = `${data.width}x${data.height}.png`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <>
      <div>
        <input {...register("backgroundColor")} type={"color"} />
        <input {...register("width")} type={"number"} />
        <input {...register("height")} type={"number"} />
        <input {...register("fontColor")} type={"color"} />
        <div>
          <button onClick={handleResetButtonClick}>Reset</button>
          <button onClick={handleSubmit(onSubmit)}>Save</button>
        </div>
      </div>
    </>
  )
}
