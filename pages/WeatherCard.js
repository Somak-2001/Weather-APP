import Image from "next/image";
const celcius=(temp)=>{
  return (temp-32)*5/9;
}
const WeatherCard = ({data}) => {
  const nature=data.weather[0].main;
  console.log('====================================');
  console.log(nature);
  console.log('====================================');
  return (
    <>
    {/* Heading
    <div className="flex justify-center pt-6">
      <h3 className="relative left-52 text-2xl">Temperature in {data.name} [{data.sys.country}]</h3>
    </div> */}
    {/* Picture */}
    <div className="grid grid-cols-2">
    <figure>
    <div className="grid grid-cols-2">
    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='Icons'
        width='100' height='100'
      ></Image>
      <p className="relative top-9 right-6 text-3xl">{celcius(data.main.temp).toFixed(0)}&#176;</p>
      </div>
      <figcaption className="relative left-7 text-2xl"><b>{data.weather[0].main}</b></figcaption>
    </figure>
      <h3 className="relative left-20 top-8 text-5xl">{data.name},{data.sys.country}</h3>
    </div>
    {/* Description */}
       <div>
          <p className="relative left-4">({data.weather[0].description})</p>
          <div className="grid grid-cols-4 grid-rows-2  p-6 relative top-6 text-white">
          <p className="w-36">Temp_max: {celcius(data.main.temp_max).toFixed(2)}&#176;</p>
          <p className="w-36">Temp_min: {celcius(data.main.temp_min).toFixed(2)}&#176;</p>
          <p className="w-36">Wind Speed: {data.wind.speed}</p>
          <p className="w-36">Feels Like: {data.main.feels_like}</p>
          <p className="w-36">Humidity: {data.main.humidity}</p>
          <p className="w-36">Pressure: {data.main.pressure}</p>
          <p className="w-36">Visibility: {data.visibility}</p>
          <p className="w-36">Timezone: {data.timezone}</p>
          </div>
       </div>
    </>
  )
}

export default WeatherCard;
