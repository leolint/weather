import styles from '../twoWeeks/twoWeeks.module.css';
import { menuSwitch } from '../../store/menuSlice';
import { useDispatch, useSelector } from 'react-redux';


function TwoWeeks() {

    const { forecast } = useSelector(state => state.weather.data)

    const active = useSelector(state => state.menu.isMenuActive);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper} onClick={() => dispatch(menuSwitch(false))}>
            <div className='container m-auto'>
                <div className={styles.items}>
                    {forecast && forecast?.forecastday.slice(0, 14).map((item, index) =>
                        <div className={styles.content}>
                            <img className={styles.icon} src={item.day.condition.icon} alt="" />
                            <p>Дата : {item.date}</p>
                            <p>Максимальная температура : {item.day.maxtemp_c}</p>
                            <p>Скорость ветра : {item.day.maxwind_kph}</p>
                            <p>Влажность : {item.day.avghumidity}</p>
                            <p>Шанс дождя : {item.day.daily_chance_of_rain}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default TwoWeeks;