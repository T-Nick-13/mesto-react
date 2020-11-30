//General form for all popups
function PopupWithForm(props) {


  return(
    <div className={`popup popup${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form popup__form_profile" noValidate>{props.children}</form>
        <button className="popup__close-btn" type="button"></button>
      </div>
    </div>
  )
}

export default PopupWithForm

/*
«Редактировать профиль»
«Новое место»
«Обновить аватар»
«Вы уверены?»
*/
