
function PopupWithForm(props) {
  return(
    //General form for all popups
    <div className={`popup popup${props.name}`}>
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
