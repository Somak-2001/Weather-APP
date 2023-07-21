import spinner from '../public/Spinner.gif';
import Image from 'next/image';
const Spinner = () => {
  return (
    <>
      <Image src={spinner} alt="Loading..." className='w-[200px] m-auto block'></Image>
    </>
  )
}

export default Spinner;
