import Modal from 'react-modal'
import styled from 'styled-components'

export const StyledModal = styled(Modal)`
  &.react-auth-modal-content {
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 45.937rem;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--gray-700);
    -webkit-overflow-scrolling: auto;
    border-radius: 20px;
    outline: none;
    padding: 25px 30px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
`

export const IconAndTitleContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ImgIcon = styled.img`
  display: block;
`

export const IconCloseButton = styled.img`
  display: block;
  cursor: pointer;
`
