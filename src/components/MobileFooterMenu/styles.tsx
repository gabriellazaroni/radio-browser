import styled from "styled-components";

export const IconsMobileFooterContainer = styled.div`
  display: none;
  @media(max-width: 760px) {
    display: flex;
    justify-content: space-around;
    position: fixed; 
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--gray-800);
    padding: 20px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }
`