import React from 'react';
import s from './HeaderDown.module.scss'
import Submenu from './Submenu/Submenu.jsx';
import { useState } from 'react';

const HeaderDown = () => {
const [menuActive, setMenuActive] = useState(false)
const some = () => {
  console.log('click')
  setMenuActive(!menuActive)

}
  return (
        <div className={s.header__down}>
          <div className={s.catalog}>
            <div className="" onClick={() => some}>
              <span className={s.catalog_text} onClick={() => some}>Каталог</span>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H24V8H0V6Z" fill="#BB8C5F" />
                <path d="M0 0H24V2H0V0Z" fill="#BB8C5F" />
                <path d="M0 12H24V14H0V12Z" fill="#BB8C5F" />
              </svg>
            </div>
            <Submenu active={menuActive} setActive={setMenuActive}/>
          </div>
          <div className={s.search__wrapper}>
            <label htmlFor="search"></label>
            <i className="fas fa-search"></i>
            <input
              className={s.header_search}
              type="text"
              name="search"
              placeholder="Поиск"
            />
          </div>
          <ul className={s.inform}>
            <li className="">Промокоды</li>
            <li className="">Скидки</li>
            <li className="">Помощь</li>
            <li className="">О нас</li>
            <li className="">Контакты</li>
          </ul>
        </div>
  )
}
export default HeaderDown
