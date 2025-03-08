import styled from 'styled-components'

export const PageContainer = styled.div`
  max-width: 1034px;
  margin: auto;
  display: flex;
  background-color: transparent;
  border-radius: 20px;
  gap: 20px;
  padding: 20px;
  @media(max-width: 760px) {
    height: 100vh;
    padding: 0px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const SearchFavoriteInputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 250px;
  margin-top: 5px;
  margin-bottom: 10px;
`
export const MobileSearchFavoriteInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 0px 20px;
`

export const MainContainer = styled.main`
  width: 100%;
  padding: 10px;
  background-color: var(--gray-700);
  border-radius: 20px;
  flex-grow: 1; 
  overflow-y: auto;
  @media(max-width: 760px) {
    border-radius: 0px;
    padding-bottom: 70px; 

  }
`

export const LogoRadioBrowserContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 0 20px 0;
  @media(max-width: 500px) {
    margin-bottom: 20px;
  }
`

export const Logo = styled.img`
  display: block;
  width: 300px;
`

export const ButtonAndSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const ButtonDeleteAllContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
`

export const SubtitleRadioBrowser = styled.h2`
  font-size: var(--font-md);
  font-weight: 600;
`

export const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EmptyPlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 0 40px;
`

export const ImgEmptyPlaylist = styled.img`
  display: block;
  width: 400px;
`

export const IconImg = styled.img`
  display: block;
  width: 30px;
  cursor: pointer;
`
export const ArrowIcon = styled.img`
  display: block;
  width: 10px;
  cursor: pointer;
`
export const IconContainer = styled.div`
  display: flex;
  gap: 30px;
  @media(max-width: 500px) {
    margin-left: 30px;
    gap: 20px;
  }
`

export const TrashIcon = styled.img`
  display: block;
  width: 25px;
  cursor: pointer;
`

export const CheckIcon = styled.img`
  display: block;
  width: 25px;
  cursor: pointer;
`

export const PaginationControlContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;
`

export const PaginationTitle = styled.h1`
  font-weight: 600;
  font-size: var(--font-md);
  color: var(--white);
`

export const PlayAndNameRadioContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const CountryRadioNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: start;
`

export const FavoriteRadioName = styled.p`
  font-size: var(--font-md);
  font-weight: 600;
`

export const FavoriteRadioCountry = styled.p`
  font-size: var(--font-sm);
  font-weight: 400;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ModalText = styled.h1`
  text-align: center;
`

export const ModalButtonsContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
`

export const ModalCancelButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  font-size: var(--font-n);
  font-weight: 600;
  color: white;
  border: 1px solid var(--dark-300);
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  height: 50px;
`

export const ModalDeleteButton = styled.button`
  padding: 5px 10px;
  background-color: var(--red);
  font-size: var(--font-n);
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #c10c3c;
  }
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  height: 50px;
`

export const EditInputAndButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const EditInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--gray-800);
`

export const DeleteFaveRadioName = styled.p`
  color: var(--purple-500);
  font-weight: 700;
`

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
