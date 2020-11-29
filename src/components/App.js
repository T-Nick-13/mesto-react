//import logo from './logo.svg';
//import './App.css';
//import logoPath from '../images/logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      {/*<main>
        <ul className="elements page__elements"></ul>
      </main>*/}
      <Footer/>

      <PopupWithForm name="" title="Редактировать профиль">
        <input id="input-name" type="text" placeholder="Имя" className="popup__text popup__text_name" minLength="2" maxLength="40" required/>
        <span id="input-name-error" className="popup__text-error"></span>
        <input id="input-occupation" type="text" placeholder="О себе" className="popup__text popup__text_occupation" minLength="2" maxLength="200" required/>
        <span id="input-occupation-error" className="popup__text-error"></span>
        <button className="popup__btn" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="_card" title="Новое место">
        <input id="input-place" type="text" placeholder="Название" className="popup__text popup__text_place" minLength="1" maxLength="30" required/>
        <span id="input-place-error" className="popup__text-error"></span>
        <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
        <span id="input-link-error" className="popup__text-error"></span>
        <button className="popup__btn popup__btn-crd" type="submit">Создать</button>
      </PopupWithForm>

      <div className="popup-image">
        <div className="popup-image__container">
          <img className="popup-image__picture" src="#" alt=""/>
          <p className="popup-image__title"></p>
          <button className="popup-image__close-btn popup__close-btn" type="button"></button>
        </div>
      </div>

      {/*<div className="popup popup-submit">
        <div className="popup__container">
          <h2 className="popup-submit__heading">Вы уверены?</h2>
          <form className="popup__form">
          <button className="popup-submit__btn popup__btn" type="submit">Да</button>
          </form>
          <button className="popup__close-btn" type="button"></button>
        </div>
  </div>*/}

      <PopupWithForm name="-submit" title="Вы уверены?">
        <button className="popup-submit__btn popup__btn" type="submit">Да</button>
      </PopupWithForm>

      <PopupWithForm name="-avatar" title="Обновить аватар">
        <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
        <span id="input-link-error" className="popup__text-error"></span>
        <button className="popup__btn popup__btn-crd" type="submit">Сохранить</button>
      </PopupWithForm>


    </div>
  );
}

export default App;
