import React from 'react';
import s from './Header.module.scss'
import HeaderUp from './HeaderUp/HeaderUp.jsx';
import HeaderDown from './HeaderDown/HeaderDown.jsx';

const Header = () => {
  return (
    <header>
      <div className={s.header_wrapper}>
        <HeaderUp/>
        <HeaderDown/>
      </div>
    </header>
  )
}
export default Header
