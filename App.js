import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import getWeather from './helpers/api.js'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './store/weatherSlice';

function App() {

  const { data } = useSelector(state => state.weather.data)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData())
  }, []);

  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
