import React from 'react';
import s from './Submenu.module.scss'
import { NavLink } from 'react-router-dom'

const Submenu = ({active, setActive}) => {

  return (
    <div id="catalog" className={active ? s.submenu_container : s.submenu_container_visible}>
      <div className={s.submenu}>
        <ul className={s.submenu__categories}>
          <li>По категории</li>
          {/* <li>По брендам</li> /*TODO finish menu */}
        </ul>
        <ul className={s.submenu__text}>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Новинки
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Наборы для татуировок
          </NavLink>
          <NavLink
            to="/catalog/tatoomachine"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Тату машинки
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Тату краски
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Тату иглы
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Тату держатели
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Тату наконечники
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Блоки питания
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Педали и провода
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Аксессуары
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Принтеры и планшеты
          </NavLink>
          <NavLink
            to="/404"
            className={(navData) =>
              navData.isActive ? s.activeLink : s.item
            }
            // onClick={visualContecstMenu}
          >
            Защита, ёмкости, расходные материалы
          </NavLink>
        </ul>
      </div>
    </div>
  )
}
export default Submenu
