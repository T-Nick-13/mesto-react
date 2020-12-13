import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (`elements__del ${isOwn ? 'elements__del_active' : ''}`);

  const isLiked = props.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (`elements__like ${isLiked ? 'elements__like_active' : ''}`);

  function handleClick() {
    props.onCardClick({
      link: props.link,
      name: props.name
    });
  }

  return(
    <li className="elements__element">
      <img className="elements__img" src={props.link} alt={props.name} onClick={handleClick} />
      <div className="elements__container">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-container">
          <button type="button" className={cardLikeButtonClassName} src="./images/Vector.svg" alt="Изображение отметка Нравится"></button>
          <p className="elements__like-counter">{props.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName} src="./images/Group.svg" alt="Изображение удалить" ></button>
    </li>
  )
}

export default Card
