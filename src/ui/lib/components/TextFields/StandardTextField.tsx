import React, { useId } from "react"

interface StandardTextFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string
  InputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

export function StandardTextField({
  label,
  InputProps,
  ...props
}: StandardTextFieldProps) {
  const inputId = useId()

  return (
    <>
      <div {...props} className={"px-1 py-3"}>
        <label htmlFor={inputId} className={"text-sm text-gray-600"}>
          {label}
        </label>
        <div className={"border-b border-black px-1"}>
          <input
            id={inputId}
            {...InputProps}
            className={"w-full focus:outline-none"}
          />
        </div>
      </div>
    </>
  )
}
