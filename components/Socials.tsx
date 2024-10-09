import Image from 'next/image'

export default function Socials(){

  return(
    <div className="flex flex-wrap gap-x-5 justify-center">
      <a href="https://linkedin.com/in/shricastic">
        <Image src="https://www.svgrepo.com/show/54425/linkedin.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a>

      <a href="https:/github.com/shricastic">
        <Image src="https://www.svgrepo.com/show/217753/github.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a>

      <a href='mailto:shricse07@gmail.com'>
        <Image src="https://www.svgrepo.com/show/375840/mail.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a> 

      <a href='tel: +91-7378484905'>
        <Image src="https://www.svgrepo.com/show/501822/phone.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a>

      <a href='https://twitter.com/shricastic7'>
        <Image src="https://www.svgrepo.com/show/331618/twitter.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a> 

      <a href='https://drive.google.com/file/d/12GnO1sORPzmPTiGzQcv5dU0_t-LTFPtR/view'>
        <Image src="https://www.svgrepo.com/show/256714/download-file-document.svg"
        alt="Linkedin" width={35} height={35}
        className="cursor-pointer"
      /></a> 
    </div>     
  )
}
