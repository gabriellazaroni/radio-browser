import { ReactNode } from "react"
import { Card } from "./styles"

interface RadioCardProps {
  children?: ReactNode
  onClick?: VoidFunction
}

export const RadioCard: React.FC<RadioCardProps> = ({ children, onClick }) => {
  return (
    <Card onClick={onClick}>
      {children}
    </Card>
  )
}