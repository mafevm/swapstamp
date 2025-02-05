import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "font-semibold rounded-lg transition-colors duration-300"
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-secondary text-white hover:bg-opacity-90",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  }
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

