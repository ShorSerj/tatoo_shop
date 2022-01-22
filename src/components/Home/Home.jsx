import React from 'react';
import s from './Home.module.css'
import CardsContainer from './Cards/CardsContainer'
import Button from './Button/Button.jsx'


const Home = () => {
  return (
    <main>
      <div className={s.main__wrapper}>
        <div className={s.prewie}>
          <h1>Лучшие товары в мире татуировок</h1>
          <h3>
            Оборудование и расходники для самых ярких и качественных работ
          </h3>
          <Button text={'Смотреть каталог'}/>
        </div>
      </div>
      <CardsContainer />
    </main>
  )
}
export default Home
