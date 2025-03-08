import styled from 'styled-components'

interface SidebarContainerProps {
  $issidebaropen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: ${({ $issidebaropen }) => ($issidebaropen ? 'block' : 'none')};
  flex-direction: column;
  max-width: 244px;
  width: 100%;
  gap: 12px;
  padding: 10px;
  background-color: var(--gray-700);
  border-radius: 20px;

  @media (max-width: 760px) {
    max-width: 100%;
  }
`;