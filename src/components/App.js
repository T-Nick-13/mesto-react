import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState('');


  React.useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getInitialCards()
    ])
    .then(([userInfo, initialCards]) => {
      setUserName(userInfo.name);
      setUserAvatar(userInfo.avatar);
      setUserDescription(userInfo.about);
      setCurrentUser(userInfo);
      setCards(initialCards)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  React.useEffect(() => {
    const ESC = 'Escape';
    function handleEscClose(evt) {
      if (evt.key === ESC) {
        closeAllPopups();
      }
    }
    document.addEventListener('keyup', handleEscClose);
    return () => document.removeEventListener('keyup', handleEscClose)
  }, [])


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(()=>{
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })

  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        userAvatar={userAvatar}
        name={userName}
        about={userDescription}
        cards={
          cards.map((card)=>{
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            )
          })
        } />

      <Footer/>

      <PopupWithForm name="" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} btnValue="Сохранить" >
        <input id="input-name" type="text" placeholder="Имя" className="popup__text popup__text_name" minLength="2" maxLength="40" required/>
        <span id="input-name-error" className="popup__text-error"></span>
        <input id="input-occupation" type="text" placeholder="О себе" className="popup__text popup__text_occupation" minLength="2" maxLength="200" required/>
        <span id="input-occupation-error" className="popup__text-error"></span>
      </PopupWithForm>

      <PopupWithForm name="_card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}  btnValue="Создать" >
        <input id="input-place" type="text" placeholder="Название" className="popup__text popup__text_place" minLength="1" maxLength="30" required/>
        <span id="input-place-error" className="popup__text-error"></span>
        <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
        <span id="input-link-error" className="popup__text-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm name="-submit" title="Вы уверены?" btnValue="Да" >
      </PopupWithForm>

      <PopupWithForm name="-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} btnValue="Сохранить" >
        <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
        <span id="input-link-error" className="popup__text-error"></span>
      </PopupWithForm>


    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
