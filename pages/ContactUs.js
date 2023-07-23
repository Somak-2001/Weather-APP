import Image from "next/image";
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormCard from "./FormCard";
import NavBar from "./NavBar";
const ContactUs = () => {
  return (
    <div className="overflow-x-hidden bg-slate-100">
      <Image src='/screen-12.jpg' height="50" width="600" alt='Background Image' className='xl:w-full lg:w-full md:w-full sm:w-full xl:h-80 lg:h-80 md:h-64 sm:h-64' />
      <div className="w-[55%] relative left-[28%] bottom-16">
      <NavBar />
      </div>
      <div className="font-semibold font-serif text-slate-200 relative bottom-40 xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-center">Contact Us</div>
      <div className="relative bottom-2">
        <div className="w-[41%] relative top-16 xl:left-20 lg:left-16 md:left-14 sm:left-14 ">
          <div>
            <h1 className="font-sans font-bold text-4xl">Get in touch</h1>
            <p className="m-5 font-serif">Looking for help? Fill the form and start a new adventure.</p>
          </div>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <div className="flex flex-col">
            <div>
              <h1 className="font-semibold font-sans text-xl">Headquaters</h1>
              <div className="flex m-5">
              <BusinessIcon className=" text-blue-600 mr-2"/>
              <p>North 24 PGS, West Bengal, India</p>
              </div>
            </div>
            <div className="mb-2">
            <h1 className="font-semibold font-sans text-xl">Phone: </h1>
            <div className="flex m-3">
              <PhoneIcon className=" text-blue-600 mr-2"/>
              <p>+91 9883224092</p>
            </div>
            </div>
            <div>
              <h1 className="font-semibold font-sans text-xl">Support</h1>
              <div className="flex m-3">
              <EmailIcon className=" text-blue-600"/>
              <p className="ml-2">somakpoddar@gmail.com</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold font-sans text-xl">Follow Us</h1>
              <div>
                 <div className="flex m-4">
                 <FacebookIcon className="mr-2 text-blue-600 cursor-pointer"/>
                 <InstagramIcon className="ml-1 mr-2 text-blue-600 cursor-pointer"/>
                 <LinkedInIcon className="ml-1 text-blue-600 cursor-pointer"/>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormCard />
    </div>
  )
}

export default ContactUs;
