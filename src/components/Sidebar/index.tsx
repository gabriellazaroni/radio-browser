import { ReactNode } from "react";
import { SidebarContainer } from "./styles";

interface SidebarProps {
  children?: ReactNode;
  issidebaropen?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, issidebaropen = false }) => {
  return <SidebarContainer $issidebaropen={issidebaropen}>{children}</SidebarContainer>;
};
