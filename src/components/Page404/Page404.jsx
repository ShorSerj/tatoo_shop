import Button from '../Home/Button/Button.jsx'
import s from './Page404.module.css'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
    <main className={s.container}>
      <div className={s.content__wrapper}>
        <h1 className={s.title}>Ошибка 404!</h1>
        <h3 className={s.text}>
          Эта страница не найдена, мы уже работаем, чтобы ее восстановить!
        </h3>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? s.activeLink : s.item)}
        >
          <Button text={'Вернуться на главную'} />
        </NavLink>
      </div>
      <img src="images/404.png" alt="not page" />
    </main>
  )
}
export default Page404
