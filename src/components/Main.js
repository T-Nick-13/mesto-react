import { useState } from "react";

function Main(props) {

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar_overlay" onClick={props.onEditAvatar} ></div>
          <img className="profile__avatar" src={props.userAvatar} alt="Изображение аватар" />
          <div className="profile__info">
            <h1 className="profile__name">{props.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__occupation">{props.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <ul className="elements page__elements"></ul>
    </main>
  )
}

export default Main
