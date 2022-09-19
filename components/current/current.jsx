import styles from '../current/current.module.css'
import { useDispatch, useSelector } from 'react-redux';


function Current() {

    const { current } = useSelector(state => state.weather.data)

    return (
        <div className={styles.wrapper}>
            <div className='container m-auto'>
                <div className={styles.day}>
                    <img className={styles.icon} src={current?.condition.icon} alt="" />
                    <p className={styles.info}>Влажность:{current?.humidity}</p>
                    <p className={styles.info}>Условия:{current?.condition.text}</p>
                    <p className={styles.info}>Чувствуется как:{current?.feelslike_c}</p>
                    <p className={styles.info}>Давление:{current?.pressure_mb}</p>
                    <p className={styles.info}>Ветер:{current?.wind_kph}</p>
                    <p className={styles.info}>Направление ветра:{current?.wind_dir}</p>
                </div>
            </div>
        </div>
    );
}

export default Current;
