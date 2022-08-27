import * as z from "zod"

export const configFormSchema = z.object({
  width: z.number().min(1).max(10000),
  height: z.number().min(1).max(10000),
  fontColor: z.string().min(4).max(9).regex(/^#/),
  backgroundColor: z.string().min(4).max(9).regex(/^#/),
})

export type ConfigForm = z.infer<typeof configFormSchema>
