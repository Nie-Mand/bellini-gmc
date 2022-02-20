import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Gallery />
      <div className="h-40"></div>
      <Booking />
    </div>
  )
}

export default Home
