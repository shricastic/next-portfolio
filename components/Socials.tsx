import { FaLinkedin, FaGithub} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

export default function Socials(){

  return(
    <div className="flex flex-wrap gap-x-5 justify-center text-slate-400">
      <a href="https://linkedin.com/in/shricastic">
        <FaLinkedin className='w-6 h-6 transition-transform duration-500 hover:scale-110 md:w-8 md:h-8'/>
      </a>

      <a href="https:/github.com/shricastic">
         <FaGithub className='w-6 h-6 transition-transform duration-500 hover:scale-110 md:w-8 md:h-8'/>
      </a>

      <a href='mailto:shricse07@gmail.com'>
        <IoMdMail className='w-6 h-6 transition-transform duration-500 hover:scale-110 md:w-8 md:h-8'/>
      </a> 

      <a href='https://twitter.com/shricastic7'>
        <BsTwitterX className='w-6 h-6 transition-transform duration-500 hover:scale-110 md:w-8 md:h-8'/>
      </a> 

      <a href='https://drive.google.com/file/d/12GnO1sORPzmPTiGzQcv5dU0_t-LTFPtR/view'>
        <img src="/images/cv.svg" alt="cv" className="w-6 h-6 filter invert transition-transform duration-500 hover:scale-110 md:w-8 md:h-8"/> 
      </a>
    </div>     
  )
}
;
