import styles from "../header/header.module.css"
import Menu from "./menu/menu";
import { useDispatch, useSelector } from 'react-redux';

function Header() {

  const { location } = useSelector(state => state.weather.data)
  console.log(location);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          Weather
        </h1>
        <p className={styles.location}>City:{location?.name}</p>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
