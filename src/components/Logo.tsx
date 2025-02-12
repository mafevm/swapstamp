import type React from "react"

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="https://raw.githubusercontent.com/mafevm/swapstamp/main/209753750.svg"
      alt="SwapStamp Logo"
      className={className}
    />
  )
}

export default Logo

