import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
import Gallery from "../components/Gallery"
import SearchSection from "../components/SearchSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div id="scene">
      <HeroSection />
      <Gallery />
      <SearchSection />
      <Booking />
      <Footer />
    </div>
  )
}

export default Home
