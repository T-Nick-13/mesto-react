//import logo from './logo.svg';
//import './App.css';
//import logoPath from '../images/logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <Header/>
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar_overlay"></div>
          <img className="profile__avatar" src="#" alt="Изображение аватар"/>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__occupation">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <Main/>
      {/*<main>
        <ul className="elements page__elements"></ul>
      </main>*/}
      <Footer/>
      {/*<footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>*/}
      <div className="popup">
        <div className="popup__container">
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="popup__form popup__form_profile" novalidate>
            <input id="input-name" type="text" placeholder="Имя" className="popup__text popup__text_name" minlength="2" maxlength="40" required/>
            <span id="input-name-error" className="popup__text-error"></span>
            <input id="input-occupation" type="text" placeholder="О себе" className="popup__text popup__text_occupation" minlength="2" maxlength="200" required/>
            <span id="input-occupation-error" className="popup__text-error"></span>
            <button className="popup__btn" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-btn" type="button"></button>
        </div>
      </div>
      <div className="popup popup_card">
        <div className="popup__container">
          <h2 className="popup__heading">Новое место</h2>
          <form className="popup__form popup__form_card">
            <input id="input-place" type="text" placeholder="Название" className="popup__text popup__text_place" minlength="1" maxlength="30" required/>
            <span id="input-place-error" className="popup__text-error"></span>
            <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
            <span id="input-link-error" className="popup__text-error"></span>
          <button className="popup__btn popup__btn-crd" type="submit">Создать</button>
          </form>
          <button className="popup__close-btn" type="button"></button>
        </div>
      </div>
      <div className="popup-image">
        <div className="popup-image__container">
          <img className="popup-image__picture" src="#" alt=""/>
          <p className="popup-image__title"></p>
          <button className="popup-image__close-btn popup__close-btn" type="button"></button>
        </div>
      </div>

      <div className="popup popup-submit">
        <div className="popup__container">
          <h2 className="popup-submit__heading">Вы уверены?</h2>
          <form className="popup__form">
          <button className="popup-submit__btn popup__btn" type="submit">Да</button>
          </form>
          <button className="popup__close-btn" type="button"></button>
        </div>
      </div>

      <div className="popup popup-avatar">
        <div className="popup__container">
          <h2 className="popup__heading">Обновить аватар</h2>
          <form className="popup__form ">
            <input id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_link" required/>
            <span id="input-link-error" className="popup__text-error"></span>
          <button className="popup__btn popup__btn-crd" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-btn" type="button"></button>
        </div>
      </div>
    </div>

  );
}

export default App;
