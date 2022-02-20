import { faInstagram, faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="flex justify-center bg-[#0b0c11] px-4">
            <div className=" h-1/2">
                <div className=" flex">
                    <div className=" flex md:flex-row flex-col text-base text-[#a0aec0] md:gap-14 gap-2 mb-10 md:mt-10 mt-8 md:w-auto w-full">
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start"><FontAwesomeIcon icon={faInstagram} /><span className='px-4'>Instagram</span></button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start"><FontAwesomeIcon icon={faWhatsapp} /><span className='px-4'>WhatsApp</span></button>
                        <div className={` bg-[#222529] md:w-0 w-full md:absolute md:invisible h-[0.25px]`}></div>
                        <button className=" hover:text-white duration-200 font-semibold flex justify-start"><FontAwesomeIcon icon={faFacebookMessenger} /><span className='px-4'>Messenger</span></button>
                    </div>
                </div>
                <p className=" text-[14px] font-normal text-[#718096] pt-4 pb-8 fp:w-[500px] w-auto">We give you a legendary welcome, every time you come back.</p>
                <div className=" flex text-[14px] text-[#718096] gap-3 md:pb-20 pb-16">
                    <span>© Bellini Sousse</span>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">FAQs</button>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">Terms</button>·
                    <button className=" text-[#a0aec0] font-normal hover:text-white duration-200">Privacy</button>
                </div>
            </div>
        </div>
    )
}

export default Footer