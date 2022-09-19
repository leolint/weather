import styles from "../menu/menu.module.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { menuSwitch } from '../../../store/menuSlice';

function Menu() {

  const active = useSelector(state => state.menu.isMenuActive);
  const dispatch = useDispatch();

  const menuClass = active ? `${styles.active} ${styles.menu}` : styles.menu;
  // const blur = active ? `${styles.blur} ${styles.activeBlur}` : styles.blur;

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.button} onClick={() => dispatch(menuSwitch(!active))}>
          <span className={styles.button_span}></span>
          <span className={styles.button_span}></span>
          <span className={styles.button_span}></span>
        </div>
        <div className={menuClass} onClick={() => dispatch(menuSwitch(false))}>
          <Link className={styles.link} to='/'>Сегодня</Link>
          <Link className={styles.link} to='/threeDays'>Три дня</Link>
          <Link className={styles.link} to='/week'>Неделя</Link>
          <Link className={styles.link} to='/twoWeeks'>Две недели</Link>
        </div>
      </div>


    </div>
  );
}

export default Menu;
