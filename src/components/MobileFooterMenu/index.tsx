import { ReactNode } from "react"
import { IconsMobileFooterContainer } from "./styles"

interface MobileFooterMenuProps {
  children?: ReactNode
}

export const MobileFooterMenu: React.FC<MobileFooterMenuProps> = ({ children }) => {
  return (
    <IconsMobileFooterContainer>
      {children}
    </IconsMobileFooterContainer>
  )
}