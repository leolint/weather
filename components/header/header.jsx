import styles from "../header/header.module.css"
import Menu from "./menu/menu";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {

  const { location } = useSelector(state => state.weather.data)
  console.log(location);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link className={styles.link} to='/'>
          <h1 className={styles.title}>
            Weather
          </h1>
        </Link>

        <p className={styles.location}>City:{location?.name}</p>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
