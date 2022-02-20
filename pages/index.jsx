import Navbar from '../components/Navbar'
import Image from 'next/images';
import {bgWrap} from '../styles.module.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className={bgWrap}>
        <Image
          alt="travel"
          src="../public/img/mainBg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )
}

export default Home