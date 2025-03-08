import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Sidebar } from '../../components/Sidebar';
import {
  ArrowIcon,
  CheckIcon,
  IconContainer,
  IconImg,
  EditInput,
  MainContainer,
  ModalButtonsContainer,
  ModalCancelButton,
  ModalContainer,
  ModalDeleteButton,
  ModalText,
  PageContainer,
  PaginationControlContainer,
  PaginationTitle,
  RadioList,
  TrashIcon,
  EditInputAndButtonContainer,
  CountryRadioNameContainer,
  FavoriteRadioName,
  FavoriteRadioCountry,
  PlayAndNameRadioContainer,
  DeleteFaveRadioName,
  Logo,
  LogoRadioBrowserContainer,
  SearchInputContainer,
  EmptyPlaylistContainer,
  ImgEmptyPlaylist,
  SearchFavoriteInputContainer,
  ButtonDeleteAllContainer,
  ButtonAndSubtitleContainer,
  MobileSearchFavoriteInputContainer,
} from './styles';

import { SearchInput } from '../../components/SearchInput';
import { RadioFaveCard } from '../../components/RadioFaveCard';
import { RadioCard } from '../../components/RadioCard';
import { CustomModal } from '../../components/CustomModal';
import { truncateText } from '../../utils/truncateText';
import { MobileFooterMenu } from '../../components/MobileFooterMenu';
import { SmallButton } from '../../components/SmallButton';

import playIcon from '../../assets/play-circle.svg';
import stopIcon from '../../assets/stop-circle.svg';
import leftArrowIcon from '../../assets/angle-left.svg';
import trashIcon from '../../assets/trash-icon.svg';
import checkIcon from '../../assets/check.svg';
import pencilIcon from '../../assets/pencil.svg';
import rightArrowIcon from '../../assets/angle-right.svg';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import homeIcon from '../../assets/home.svg';
import radioListIcon from '../../assets/radiolist.svg';
import emptyPlaylistImg from '../../assets/empty-paylist.svg';

interface RadioStation {
  stationuuid: string
  name: string
  url: string
  country: string
  countrycode: string
}

export const Home: React.FC = () => {
  const [radios, setRadios] = useState<RadioStation[]>([]);
  const [favorites, setFavorites] = useState<RadioStation[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [showCheckIcon, setShowCheckIcon] = useState<string[]>(() => {
    const storedShowCheckIcon = localStorage.getItem('showCheckIcon');
    return storedShowCheckIcon ? JSON.parse(storedShowCheckIcon) : [];
  });
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentRadio, setCurrentRadio] = useState<RadioStation | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editingRadioId, setEditingRadioId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState<string>('');
  const [radioToDelete, setRadioToDelete] = useState<RadioStation | null>(null);
  const [isClearAllModalOpen, setIsClearAllModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  const [searchFavorites, setSearchFavorites] = useState<string>('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

  const filteredFavorites = favorites.filter(radio =>
    radio.name.toLowerCase().includes(searchFavorites.toLowerCase())
  );

  const toggleSearchFavorites = () => {
    setIsMobileSearchOpen(prevState => !prevState);
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(prevState => !prevState);
    }
  };

  const openHomePlayList = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenClearAllModal = () => setIsClearAllModalOpen(true);
  const handleCloseClearAllModal = () => setIsClearAllModalOpen(false);

  const handleOpenModal = (radio: RadioStation) => {
    setRadioToDelete(radio);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setRadioToDelete(null);
  };

  useEffect(() => {
  }, [isOpen]);

  useEffect(() => {
    api.get<RadioStation[]>(
      `search?limit=10&offset=${(currentPage - 1) * 10}&name=${search}`
    )
      .then(response => setRadios(response.data))
      .catch(error => console.error('Erro ao buscar rádios:', error));
  }, [search, currentPage]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('showCheckIcon', JSON.stringify(showCheckIcon));
  }, [favorites, showCheckIcon]);

  const addToFavorites = (radio: RadioStation) => {
    if (!favorites.find(fav => fav.stationuuid === radio.stationuuid)) {
      setFavorites([...favorites, radio]);
    }
    if (!showCheckIcon.includes(radio.stationuuid)) {
      setShowCheckIcon([...showCheckIcon, radio.stationuuid]);
    }
  };

  const removeFromFavorites = () => {
    if (radioToDelete) {
      setFavorites(favorites.filter(fav => fav.stationuuid !== radioToDelete.stationuuid));
      setShowCheckIcon(showCheckIcon.filter(id => id !== radioToDelete.stationuuid));
      handleCloseModal();
    }
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setShowCheckIcon([]);
    localStorage.removeItem('favorites');
    localStorage.removeItem('showCheckIcon');
    handleCloseClearAllModal()
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const toggleRadio = (radio: RadioStation) => {
    if (currentRadio?.stationuuid === radio.stationuuid) {
      if (audio) {
        audio.pause();
        setAudio(null);
        setCurrentRadio(null);
      }
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(radio.url);
      newAudio.play();
      setAudio(newAudio);
      setCurrentRadio(radio);
    }
  };

  const startEditing = (radio: RadioStation) => {
    setEditingRadioId(radio.stationuuid);
    setEditedName(radio.name);
  };

  const saveEditedName = (radio: RadioStation) => {
    setFavorites(favorites.map(fav =>
      fav.stationuuid === radio.stationuuid ? { ...fav, name: editedName } : fav
    ));
    setEditingRadioId(null);
  };

  return (
    <PageContainer>
      {isMobile ? (
        isSidebarOpen ? (
          <Sidebar issidebaropen={!!isSidebarOpen}>
            <SearchInputContainer>
              <SearchInput
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={handleSearch}
              />
            </SearchInputContainer>
            <RadioList>
              {radios.map(radio => (
                <RadioCard
                  key={radio.stationuuid}
                  onClick={() => addToFavorites(radio)}
                >
                  <span>{truncateText(radio.name, 15)}</span>
                  {showCheckIcon.includes(radio.stationuuid) && (
                    <CheckIcon
                      src={checkIcon}
                      onClick={() => removeFromFavorites()}
                    />
                  )}
                </RadioCard>
              ))}
            </RadioList>
            <PaginationControlContainer>
              <ArrowIcon
                src={leftArrowIcon}
                onClick={() =>
                  setCurrentPage(prev => Math.max(prev - 1, 1))}
              />
              <PaginationTitle> Page {currentPage} </PaginationTitle>
              <ArrowIcon
                src={rightArrowIcon}
                onClick={() =>
                  setCurrentPage(prev => prev + 1)}
              />
            </PaginationControlContainer>
            <MobileFooterMenu>
              <IconImg src={searchIcon} />
              <IconImg src={homeIcon} onClick={openHomePlayList} />
              <IconImg onClick={toggleSidebar} src={radioListIcon} />
            </MobileFooterMenu>
          </Sidebar>
        ) : (
          <MainContainer>
            <LogoRadioBrowserContainer>
              <Logo src={logo} />
            </LogoRadioBrowserContainer>
            {isMobileSearchOpen && (
              <MobileSearchFavoriteInputContainer>
                <SearchInput
                  type="text"
                  placeholder="Search your favorite radio here..."
                  value={searchFavorites}
                  onChange={(e) => setSearchFavorites(e.target.value)}
                />
              </MobileSearchFavoriteInputContainer>
            )}
            <ButtonDeleteAllContainer>
              <SmallButton onClick={handleOpenClearAllModal}>
                Delete all favorites
              </SmallButton>
              <CustomModal
                isShowing={isClearAllModalOpen}
                onRequestClose={handleCloseClearAllModal}
              >
                <ModalContainer>
                  <ModalText>
                    Are you sure you want to delete all radiosfrom your favorite list?
                  </ModalText>
                  <ModalButtonsContainer>
                    <ModalCancelButton onClick={handleCloseModal}>
                      Cancel
                    </ModalCancelButton>
                    <ModalDeleteButton onClick={clearAllFavorites}>
                      Delete
                    </ModalDeleteButton>
                  </ModalButtonsContainer>
                </ModalContainer>
              </CustomModal>

            </ButtonDeleteAllContainer>
            <RadioList>
              {filteredFavorites.length > 0 ? (
                <>
                  {filteredFavorites.map(radio => (
                    <RadioFaveCard key={radio.stationuuid}>
                      <PlayAndNameRadioContainer>
                        <div onClick={() => toggleRadio(radio)}>
                          {currentRadio?.stationuuid === radio.stationuuid ? (
                            <IconImg src={stopIcon} alt="Stop" />
                          ) : (
                            <IconImg src={playIcon} alt="Play" />
                          )}
                        </div>
                        {editingRadioId === radio.stationuuid ? (
                          <EditInputAndButtonContainer>
                            <EditInput
                              type="text"
                              value={editedName}
                              onChange={(e) => setEditedName(e.target.value)}
                              onBlur={() => saveEditedName(radio)}
                              onKeyDown={(e) => e.key === 'Enter' && saveEditedName(radio)}
                            />
                            <SmallButton
                              onClick={() => saveEditedName(radio)}
                            >
                              Edit
                            </SmallButton>
                          </EditInputAndButtonContainer>
                        ) : (
                          <CountryRadioNameContainer>
                            <FavoriteRadioName>{truncateText(radio.name, 50)}</FavoriteRadioName>
                            <FavoriteRadioCountry>
                              {radio.country}, {radio.countrycode}
                            </FavoriteRadioCountry>
                          </CountryRadioNameContainer>
                        )}
                      </PlayAndNameRadioContainer>
                      <IconContainer>
                        <TrashIcon src={pencilIcon} onClick={() => startEditing(radio)} />
                        <TrashIcon src={trashIcon} onClick={() => handleOpenModal(radio)} />
                      </IconContainer>
                    </RadioFaveCard>
                  ))}

                  <CustomModal isShowing={isOpen} onRequestClose={handleCloseModal}>
                    <ModalContainer>
                      <ModalText>
                        Are you sure you want to delete
                        <DeleteFaveRadioName>{radioToDelete?.name}</DeleteFaveRadioName>
                        from your favorite list?
                      </ModalText>
                      <ModalButtonsContainer>
                        <ModalCancelButton onClick={handleCloseModal}>Cancel</ModalCancelButton>
                        <ModalDeleteButton onClick={removeFromFavorites}>Delete</ModalDeleteButton>
                      </ModalButtonsContainer>
                    </ModalContainer>
                  </CustomModal>
                </>
              ) : (
                <EmptyPlaylistContainer>

                  <ImgEmptyPlaylist src={emptyPlaylistImg} alt="Empty Playlist" />
                </EmptyPlaylistContainer>
              )}
            </RadioList>
            <MobileFooterMenu>
              <IconImg src={searchIcon} onClick={toggleSearchFavorites} />
              <IconImg src={homeIcon} onClick={openHomePlayList} />
              <IconImg onClick={toggleSidebar} src={radioListIcon} />
            </MobileFooterMenu>
          </MainContainer>
        )
      ) : (
        <>
          <Sidebar issidebaropen={true}>
            <SearchInputContainer>
              <SearchInput
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={handleSearch}
              />
            </SearchInputContainer>
            <RadioList>
              {radios.map(radio => (
                <RadioCard key={radio.stationuuid} onClick={() => addToFavorites(radio)}>
                  <span>{truncateText(radio.name, 15)}</span>
                  {showCheckIcon.includes(radio.stationuuid) && (
                    <CheckIcon src={checkIcon} onClick={() => removeFromFavorites()} />
                  )}
                </RadioCard>
              ))}
            </RadioList>
            <PaginationControlContainer>
              <ArrowIcon
                src={leftArrowIcon}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              />
              <PaginationTitle> Page {currentPage} </PaginationTitle>
              <ArrowIcon
                src={rightArrowIcon}
                onClick={() => setCurrentPage(prev => prev + 1)}
              />
            </PaginationControlContainer>
            <MobileFooterMenu>
              <IconImg src={searchIcon} />
              <IconImg src={homeIcon} onClick={openHomePlayList} />
              <IconImg onClick={toggleSidebar} src={radioListIcon} />
            </MobileFooterMenu>
          </Sidebar>
          <MainContainer>
            <LogoRadioBrowserContainer>
              <Logo src={logo} />
            </LogoRadioBrowserContainer>
            <ButtonAndSubtitleContainer>

              <SearchFavoriteInputContainer>
                <SearchInput
                  type="text"
                  placeholder="Search your favorite radio here..."
                  value={searchFavorites}
                  onChange={(e) => setSearchFavorites(e.target.value)}
                />
              </SearchFavoriteInputContainer>
              <SmallButton onClick={handleOpenClearAllModal}>
                Delete all favorites
              </SmallButton>
              <CustomModal
                isShowing={isClearAllModalOpen}
                onRequestClose={handleCloseClearAllModal}
              >
                <ModalContainer>
                  <ModalText>
                    Are you sure you want to delete all radiosfrom your favorite list?
                  </ModalText>
                  <ModalButtonsContainer>
                    <ModalCancelButton onClick={handleCloseModal}>Cancel</ModalCancelButton>
                    <ModalDeleteButton onClick={clearAllFavorites}>Delete</ModalDeleteButton>
                  </ModalButtonsContainer>
                </ModalContainer>
              </CustomModal>

            </ButtonAndSubtitleContainer>
            <RadioList>
              {filteredFavorites.length > 0 ? (
                <>
                  {filteredFavorites.map(radio => (
                    <RadioFaveCard key={radio.stationuuid}>
                      <PlayAndNameRadioContainer>
                        <div onClick={() => toggleRadio(radio)}>
                          {currentRadio?.stationuuid === radio.stationuuid ? (
                            <IconImg src={stopIcon} alt="Stop" />
                          ) : (
                            <IconImg src={playIcon} alt="Play" />
                          )}
                        </div>
                        {editingRadioId === radio.stationuuid ? (
                          <EditInputAndButtonContainer>
                            <EditInput
                              type="text"
                              value={editedName}
                              onChange={(e) => setEditedName(e.target.value)}
                              onBlur={() => saveEditedName(radio)}
                              onKeyDown={(e) => e.key === 'Enter' && saveEditedName(radio)}
                            />
                            <SmallButton onClick={() => saveEditedName(radio)}>
                              Edit
                            </SmallButton>
                          </EditInputAndButtonContainer>
                        ) : (
                          <CountryRadioNameContainer>
                            <FavoriteRadioName>
                              {truncateText(radio.name, 50)}
                            </FavoriteRadioName>
                            <FavoriteRadioCountry>
                              {radio.country}, {radio.countrycode}
                            </FavoriteRadioCountry>
                          </CountryRadioNameContainer>
                        )}
                      </PlayAndNameRadioContainer>
                      <IconContainer>
                        <TrashIcon src={pencilIcon} onClick={() => startEditing(radio)} />
                        <TrashIcon src={trashIcon} onClick={() => handleOpenModal(radio)} />
                      </IconContainer>
                    </RadioFaveCard>
                  ))}

                  <CustomModal isShowing={isOpen} onRequestClose={handleCloseModal}>
                    <ModalContainer>
                      <ModalText>
                        Are you sure you want to delete
                        <DeleteFaveRadioName>{radioToDelete?.name}</DeleteFaveRadioName>
                        from your favorite list?
                      </ModalText>
                      <ModalButtonsContainer>
                        <ModalCancelButton onClick={handleCloseModal}>Cancel</ModalCancelButton>
                        <ModalDeleteButton onClick={removeFromFavorites}>Delete</ModalDeleteButton>
                      </ModalButtonsContainer>
                    </ModalContainer>
                  </CustomModal>
                </>
              ) : (
                <EmptyPlaylistContainer>

                  <ImgEmptyPlaylist src={emptyPlaylistImg} alt="Empty Playlist" />
                </EmptyPlaylistContainer>
              )}
            </RadioList>
            <MobileFooterMenu>
              <IconImg src={searchIcon} />
              <IconImg src={homeIcon} onClick={openHomePlayList} />
              <IconImg onClick={toggleSidebar} src={radioListIcon} />
            </MobileFooterMenu>
          </MainContainer>
        </>
      )}
    </PageContainer>
  );
};