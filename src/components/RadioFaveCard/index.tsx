import { ReactNode } from "react"
import { Card } from "./styles"

interface RadioFaveCardProps {
  children?: ReactNode
  onClick?: VoidFunction
}

export const RadioFaveCard: React.FC<RadioFaveCardProps> = ({ children, onClick }) => {
  return (
    <Card onClick={onClick}>
      {children}
    </Card>
  )
}