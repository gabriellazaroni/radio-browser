import { Button } from "./styles"

interface SmallButtonProps {
  children?: string
  onClick?: VoidFunction
}

export const SmallButton: React.FC<SmallButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
    >
      {children}
    </Button>
  )
}