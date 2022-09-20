import styles from '../week/week.module.css'
import { useDispatch, useSelector } from 'react-redux';


function Week() {

    const { forecast } = useSelector(state => state.weather.data)

    console.log(forecast);

    return (
        <div className={styles.wrapper}>
            <div className='container m-auto'>
                <div className={styles.items}>
                    {forecast && forecast?.forecastday.slice(0, 7).map((item, index) =>
                        <div className={styles.content}>
                            <img src={item.day.condition.icon} alt="" />
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

export default Week;