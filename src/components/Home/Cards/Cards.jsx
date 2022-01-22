import React from 'react';
import s from './Cards.module.css'
import Card from './Card/Card.jsx'
import Button from '../Button/Button.jsx'

// const styleRules = { opacity: this.props.opacity };
// return (<div className="background" style={styleRules} />);

const Cards = (props) => {
  let cardData = props.newProducts.map((m) => (
    <Card img={m.img} model={m.model} id={m.id} key={m.id} coast={m.coast} />
  ))
  return (
    <article className={s.cards__container}>
      <div className={s.cards__wrapper}>
        <ul className={s.categories}>
          <li>Хиты продаж</li>
          <li>Самые популярные</li>
          <li>Новые поступления</li>
          <li>Акционные товары</li>
        </ul>
        <div className={s.cards__content}>{cardData}</div>
        <div className={s.buttonWrapper}>
          <Button text={'Показать ещё'} />
        </div>
      </div>
    </article>
  )
}
export default Cards
