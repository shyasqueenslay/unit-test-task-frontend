import * as React from "react"
const VirtualCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#272B2F"
        d="M12.555.5h-10A1.667 1.667 0 0 0 .89 2.167v16.666A1.666 1.666 0 0 0 2.555 20.5h10a1.666 1.666 0 0 0 1.667-1.667V2.167A1.667 1.667 0 0 0 12.555.5Zm0 18.333h-10V2.167H4.5l.555 1.666h5l.556-1.666h1.944v16.666Z"
      />
      <path fill="#fff" d="M6.11 9.484h10.011V20.5H6.11z" />
      <path
        stroke="#272B2F"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M8.372 12.521a1 1 0 0 1 1-1h9.196a1 1 0 0 1 1 1v6.143a1 1 0 0 1-1 1H9.372a1 1 0 0 1-1-1V12.52Z"
      />
      <path fill="#272B2F" d="M8.88 13.92h10.178v1.84H8.88v-1.84Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.889.5h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
)
export default VirtualCard
