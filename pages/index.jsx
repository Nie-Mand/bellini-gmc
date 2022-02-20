import Navbar from "../components/Navbar"
import Image from "next/image"
import { bgWrap } from "../styles.module.css"
import Booking from "../components/Booking"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={bgWrap}>
        {/* <Image
          alt="travel"
          src="../public/img/mainBg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>

      <Booking />
    </div>
  )
}

export default Home
