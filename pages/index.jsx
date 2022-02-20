import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
import Gallery from "../components/Gallery"
import SearchSection from "../components/SearchSection"
const Home = () => {
  return (
    <div id="scene">
      <HeroSection />
      <Gallery />
      <SearchSection />
      <Booking />
    </div>
  )
}

export default Home
