import React from "react"

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: "s" | "m" | "l"
}

export function TextButton({ children, size = "m", ...props }: ButtonProps) {
  return (
    <>
      <button
        {...props}
        className={`rounded-md text-center text-sm font-normal text-black hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400
         ${sized(size)} ${props.className}`}
      >
        {children}
      </button>
    </>
  )
}

function sized(size: "s" | "m" | "l"): string {
  switch (size) {
    case "s":
      return "px-8 py-3"
    case "m":
      return "px-12 py-3"
    case "l":
      return "px-16 py-3"
  }
}
