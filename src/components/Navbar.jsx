import logo from "/Logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  useGSAP(()=>{
    gsap.from(("#navbar"),{
      opacity: 0,
      duration: 0.5,
      y: -100,
      ease: "power2.inOut",
    })
  }, [])
  return (
    <div className='w-full h-16 flex justify-between items-center mt-10 mb-[30px]' id='navbar' >
        <div className='logo'>
            <img src={logo} alt="logo" className='w-32 md:w-38'/>
        </div>
        <div className='hidden lg:flex items-center gap-3 md:gap-10 lg:gap-8 xl:gap-10 default-text'>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#" className='request-btn'>Request a quote</a>
        </div>
        <div className='lg:hidden'>
            <RxHamburgerMenu className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar