import styles from "@/styles/Card.module.css";
import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";
const Forcast = () => {
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
  /*backgroundImage: `url(/screen-12.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: `cover`,*/
  return (
    <div style={{ 
      padding: 0,
      margin: 0,
      width: "100%", 
      height: "100vh"}}>
      <input type='search'
      className="relative bottom-7" 
      placeholder="Search for Location (City name) ...."
      onSubmit={fetchweather}
      defaultValue={city} onChange={(e)=>{setCity(e.target.value)}}></input>
  </div>
  )
}

export default Forcast;
