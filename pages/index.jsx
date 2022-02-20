import Navbar from "../components/Navbar"
import Image from "next/image"
import { bgWrap } from "../styles.module.css"
import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
const Home = () => {
  return (
    <div>
      <HeroSection />

      <Booking />
    </div>
  )
}

export default Home
