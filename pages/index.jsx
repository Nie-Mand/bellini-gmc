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
      <div className="grid h-auto md:visible invisible"><div className="md:h-12 h-0 bg-[#f3f3f3]"></div></div>
      <Booking />
      <Footer />
    </div>
  )
}

export default Home
