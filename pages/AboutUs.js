import Image from "next/image";
const AboutUs = () => {
  return (
    <>
    <main>
      <Image src='/screen-12.jpg' layout='fill' alt='Background'/>
      <div className='container w-1/3 h-80 bg-stone-700 relative left-1/3 top-40'>
        <h1 className="text-center text-3xl">About Us</h1>
        <div className="text-contain">
        <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default AboutUs;
