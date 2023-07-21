import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
const AboutUs = () => {
  return (
    <div className="overflow-hidden bg-orange-200 h-[100vh]">
      <Image src='/AboutUs.jpeg' width="550" height="200" className="relative top-40 left-10 shadow-2xl border-2 border-double border-white" />
      <div className=" bg-slate-100 relative bottom-[46%] p-3 left-[46%] w-[50%] border-4 border-lime-600 border-solid rounded-lg font-serif shadow-xl">
        <span className="text-lg">Welcome to WeatherNow, your go-to destination for accurate and up-to-date weather information. Our website is dedicated to providing you with the most reliable forecasts and weather-related services to help you plan your days with confidence.</span>
        <br />
        <br />
        <h1 className="text-start text-lg font-bold">Our Mission</h1>
        <span>At WeatherNow, our mission is simple: to empower people with comprehensive weather knowledge. We believe that access to accurate weather data is crucial for making informed decisions, whether it's planning outdoor activities, traveling, or preparing for adverse weather conditions. Our team of passionate meteorologists and developers work tirelessly to ensure you receive the most precise forecasts tailored to your location.</span>
        <br />
        <br />
        <h1 className="text-start text-lg font-bold">Meet Our Team</h1>
        <span>Our team at WeatherNow consists of a diverse group of meteorology enthusiasts, seasoned forecasters, and tech-savvy individuals, all driven by a shared passion for weather science. Together, we strive to deliver the best weather services to our users and foster a deeper understanding of the atmospheric world.</span>
        <br />
        <br />
        <h1 className="text-start text-lg font-bold">Join Us on Our Journey</h1>
        <span>Since our launch in 2023, we have grown into a vibrant community of weather enthusiasts, travelers, and everyday users who rely on our platform for accurate weather information. We are constantly innovating and expanding our services to serve you better. Join us on our journey as we continue to evolve and improve WeatherNow.</span>
      </div>
      <Link href='/'>
      <div className="w-36 bg-lime-600 border-2 border-black border-solid relative left-[15%]
      bottom-[50%] cursor-pointer rounded mb-5">
        <HomeIcon className="ml-[40%]"/>
        <p className="ml-5 font-medium">Back To Home</p>
      </div>
      </Link>
    </div>
  )
}

export default AboutUs;
