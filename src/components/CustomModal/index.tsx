import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import {
  ButtonContainer,
  IconAndTitleContainer,
  IconCloseButton,
  ImgIcon,
  StyledModal
} from './styles';
import closeButtonIcon from '../../assets/close-button.svg';

export interface ModalProps {
  isShowing: boolean;
  children?: ReactNode;
  onRequestClose: () => void;
  icon?: string;
}

export const CustomModal: FC<ModalProps> = ({ onRequestClose, isShowing, children, icon }) => {
  return ReactDOM.createPortal(
    <StyledModal
      isOpen={isShowing}
      onRequestClose={onRequestClose}
      className="react-auth-modal-content"
      style={{
        overlay: {
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <ButtonContainer>
        <IconAndTitleContainer>
          {icon && <ImgIcon src={icon} />}
        </IconAndTitleContainer>
        <IconCloseButton src={closeButtonIcon} onClick={onRequestClose} />
      </ButtonContainer>
      {children}
    </StyledModal>,
    document.body
  );
};