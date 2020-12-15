import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {

  const inputLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputLink.current.value
    });
  }


  return (
    <PopupWithForm
      name="-avatar"
      title="Обновить аватар"
      btnValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <input
        id="input-link"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__text popup__text_link"
        ref={inputLink}
        required/>
      <span
        id="input-link-error"
        className="popup__text-error">
      </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
