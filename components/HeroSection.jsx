import Navbar from './Navbar'
import Images from './Images'

const HeroSection = () => {
  return (
    <div>
      <Navbar/>
      <Images/>
      <div className='flex justify-center my-3'><button className='py-3 px-8 bg-black text-white rounded-full z-0 hover:bg-black/80 duration-200'>Reserver dans Lounge</button></div>
    </div>
  )
}

export default HeroSection