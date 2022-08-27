import { zodResolver } from "@hookform/resolvers/zod"
import html2canvas from "html2canvas"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ConfigForm, configFormSchema } from "../../validation"

export function usePreview() {
  const { register, handleSubmit, reset, watch } = useForm<ConfigForm>({
    defaultValues: {
      width: 200,
      height: 200,
      fontColor: "#ffffff",
      backgroundColor: "#000000",
    },
    resolver: zodResolver(configFormSchema),
  })

  console.log(watch())

  const onSubmit: SubmitHandler<ConfigForm> = useCallback(async (data) => {
    const target = document.getElementById("preview-image")
    if (!target) return

    const canvas = await html2canvas(target, {
      width: data.width,
      height: data.height,
      scale: 1,
    })

    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")

    link.href = image
    link.download = `${data.width}x${data.height}.png`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return {
    register: register,
    watch: watch,
    resetForm: reset,
    submit: handleSubmit(onSubmit),
  }
}
