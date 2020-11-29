function Main() {

  function handleEditProfileClick() {
    const popupProfile = document.querySelector('.popup')
    popupProfile.classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup-avatar');
    popupAvatar.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupCard = document.querySelector('.popup_card');
    popupCard.classList.add('popup_opened');
  }



  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar_overlay" onClick={handleEditAvatarClick} ></div>
          <img className="profile__avatar" src="#" alt="Изображение аватар" />
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            <p className="profile__occupation">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <ul className="elements page__elements"></ul>
    </main>
  )
}

export default Main
