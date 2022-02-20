import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div id="scene">
      <HeroSection />
      <Gallery />
      <div className=" grid h-auto bg-slate-200"><div className="h-32"></div></div>
      <Booking />
      <Footer />
    </div>
  )
}

export default Home
