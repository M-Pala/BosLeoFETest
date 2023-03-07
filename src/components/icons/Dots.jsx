import * as React from "react"

const Dots = (props) => (
  <svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.969 9.5A1.97 1.97 0 1 1 9 7.531 1.976 1.976 0 0 1 10.969 9.5ZM9 5.844a1.969 1.969 0 1 0-1.969-1.969A1.976 1.976 0 0 0 9 5.844Zm0 7.312a1.969 1.969 0 1 0 1.969 1.969A1.976 1.976 0 0 0 9 13.156Z"
      fill="#000"
    />
  </svg>
)

export default Dots
