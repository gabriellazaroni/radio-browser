import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  background-color: var(--purple-500);
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #853eb1
    ;
  }
  border-radius: 5px;
`