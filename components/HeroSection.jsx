import Navbar from "./Navbar"
import Images from "./Images"

const HeroSection = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-20"></div>
      <Images />
      <div className="w-full grid place-content-center">
        <button className="mx-auto w-52 h-10 bg-black text-white rounded-full z-0 hover:bg-black/80 duration-200">
          Reserver une Table
        </button>
      </div>
    </div>
  )
}

export default HeroSection
