import styles from "@/styles/Card.module.css";
import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";
const Card = () => {
  const [city,setCity]=useState('');
  const [weather,setWeather]=useState({});
  const [loading,setLoading]=useState(false);
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchweather=(e)=>{
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response)=>{
        setWeather(response.data);
        console.log(response.data);
    }).catch((error)=>{
      console.error();
      alert("You have entered wrong City name. Please try again. "+error);
    })
    setCity('');
    setLoading(false);
  }
  if(loading){
    return <Spinner />
  }else{
  return (
    <>
      <div>
        <form className={styles.searchbar} onSubmit={fetchweather}>
        <div className="relative bottom-7">
          <input type='search' placeholder="Search for Location (City name) ...."
          className={styles.searchTerm} id='Searchbox' defaultValue={city} onChange={(e)=>{setCity(e.target.value)}}
          ></input>
          <button type="reset" value="Reset" className={styles.reset} onChange={(e)=>{e.target.value=''}}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <button onSubmit={fetchweather} type="submit" className={styles.searchbutton}>Search</button>
          </div>
        </form>
      </div>
      <article className={styles.widget}>
        <div className={styles.weathericon}>
          {weather.main && <WeatherCard data={weather}/>}
        </div>
      </article>
    </>
  )
  }
}

export default Card;
