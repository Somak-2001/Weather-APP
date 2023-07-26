import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import NavBar from "./NavBar";
const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">

      {/* Background Image */}
      <Image src='/screen-12.jpg' height="50" width="600" alt='Background Image' className='xl:w-full lg:w-full md:w-full sm:w-full xl:h-80 lg:h-80 md:h-64 sm:h-64' />

      {/* Navbar */}
      <div className="w-[55%] relative left-[28%] bottom-16">
        <NavBar />
      </div>
      <div className="font-semibold font-serif text-slate-200 relative bottom-40 xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-center">About Us</div>

      {/* Heading Texts */}
      <div className="w-[32%] relative left-[60%]">
        <h1 className="text-3xl font-serif font-bold pb-4 text-blue-950">Welcome to WeatherNow, your go-to destination for accurate and up-to-date weather information.</h1>
        <p className=" font-light text-lg pb-4"> Our website is dedicated to providing you with the most reliable forecasts and weather-related services to help you plan your days with confidence.</p>
      </div>

      {/* Left Side Images */}
      <div className="relative right-10 ">
        <Image src="/windy.png" height="100" width="200" alt="Some Image"
          className="w-[23%] relative left-[22%] bottom-56 shadow-xl bg-blue-400 rounded p-2"
        />
        <Image src="/storm.png" height="100" width="100" alt="Some Image" className="relative bottom-96 rounded left-36 w-[10%] bg-slate-100" />
        {/* <Image src="/sunny.png" height="100" width="100" alt="Some Image"
        className="relative bottom-72 left-56 bg-yellow-100 "
      /> */}
      </div>

      <div className="relative bottom-64">
        <h1 className="text-5xl text-center font-bold text-blue-950">Awesome Features</h1>
        <p className="text-center p-3 text-lg">Replenish man have thing gathering lights yielding shall you</p>
      </div>

      <div className="flex relative left-40 bottom-48">
        <div className="w-1/4 bg-purple-200 p-5 rounded-md">
          <h3 className="text-2xl font-semibold font-mono text-blue-900 m-1">Our Mission</h3>
          <span>At WeatherNow, our mission is simple: to empower people with comprehensive weather knowledge. We believe that access to accurate weather data is crucial for making informed decisions, whether it's planning outdoor activities, traveling, or preparing for adverse weather conditions. Our team of passionate meteorologists and developers work tirelessly to ensure you receive the most precise forecasts tailored to your location.</span>
        </div>

        <div className="w-1/4 bg-purple-200 p-5 ml-8 mr-8 rounded-md">
          <h3 className="text-2xl font-semibold font-mono text-blue-900 m-1">Meet Our Team</h3>
          <span>Our team at WeatherNow consists of a diverse group of meteorology enthusiasts, seasoned forecasters, and tech-savvy individuals, all driven by a shared passion for weather science. Together, we strive to deliver the best weather services to our users and foster a deeper understanding of the atmospheric world.</span>
        </div>

        <div className="w-1/4 bg-purple-200 p-5 rounded-md">
          <h3 className="text-2xl font-semibold font-mono text-blue-900 m-1">Join Us on Our Journey</h3>
          <span>Since our launch in 2023, we have grown into a vibrant community of weather enthusiasts, travelers, and everyday users who rely on our platform for accurate weather information. We are constantly innovating and expanding our services to serve you better. Join us on our journey as we continue to evolve and improve WeatherNow.</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
