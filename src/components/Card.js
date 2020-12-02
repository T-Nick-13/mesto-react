function Card(props) {

  return(
    //<template id="cardsTemplate">
      <li className="elements__element">
        <img className="elements__img" src={props.link} alt={props.name} />
        <div className="elements__container">
          <h2 className="elements__title">{props.name}</h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like" src="./images/Vector.svg" alt="Изображение отметка Нравится"></button>
            <p className="elements__like-counter">{props.likes}</p>
          </div>
        </div>
        <button type="button" className="elements__del" src="./images/Group.svg" alt="Изображение удалить"></button>
      </li>
    //</template>
  )
}

export default Card
