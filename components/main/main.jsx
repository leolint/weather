import styles from '../main/main.module.css'
import Current from '../current/current';
import ThreeDays from '../threeDays/threeDays';
import Week from '../week/week';
import TwoWeeks from '../twoWeeks/twoWeeks';
import { Route, Routes } from 'react-router-dom';


function Main() {

  return (
    <div className={styles.wrapper}>
      <div className='container m-0'>
        <Routes>
          <Route path='/' element={<Current />} />
          <Route path='/threeDays' element={<ThreeDays />} />
          <Route path='/week' element={<Week />} />
          <Route path='/twoWeeks' element={<TwoWeeks />} />
        </Routes>
      </div>

    </div>
  );
}

export default Main;
