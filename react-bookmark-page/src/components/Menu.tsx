import openMenu from '/assets/icon-hamburger.svg'
import closeMenu from '/assets/icon-close.svg'
import logo from '/assets/bookmark-white-logo.svg'
import facebookIcon from '/assets/icon-facebook.svg'
import twitterIcon from '/assets/icon-twitter.svg'
import { useState } from 'react'

const Menu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const menuOptions = ["Features", "Pricing", "Contact", "Login"];
    const socialIcons = [
        { icon: facebookIcon, href: 'facebook.com', alt: 'Facebook' },
        { icon: twitterIcon, href: 'twitter.com', alt: 'Twitter' }
    ]
    const handleToggle = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    return (
        <nav className='z-10'>
            <div className={`bg-gunmetal pt-[2.5rem] md:pt-0 absolute inset-0 md:static md:bg-transparent 
                px-8 md:px-0 ${isMenuOpened ? '' : 'hidden md:block'}`}>
                <img src={logo} alt="Bookmark logo" className='md:hidden'/>
                <ul className='mt-[2.5rem] md:mt-0 w-full md:flex md:items-center md:gap-8'>
                    {menuOptions.map((option, index) => (
                        <li key={index}
                            className='flex flex-col items-center border-t border-white-opacity-15'>
                            <a href="#"
                                className={`uppercase text-white md:text-dark-slate-blue hover:text-light-red text-[1.25rem] md:text-[.813rem] my-[1.5rem] md:my-0 font-bold md:font-normal tracking-[2.308px] md:tracking-[1.5px] leading-4 transition duration-300 ease-in-out
                                ${index === 3 && 'border-2 sm:border-white md:border-light-red hover:border-light-red w-full text-center py-4 md:py-0 rounded-[.313rem] md:bg-light-red hover:bg-white hover:text-light-red md:text-white md:py-[.75rem] md:px-8 md:font-medium '}`}>
                                {option}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center justify-center gap-8 mt-[2rem] md:hidden'>
                    {socialIcons.map((icons, index) => (
                        <a key={index} href={icons.href}>
                            <img src={icons.icon} alt={icons.alt} />
                        </a>
                    ))}
                </div>
            </div>
            <button
                onClick={handleToggle}
                className='cursor-pointer relative md:hidden'
                aria-label={isMenuOpened ? 'Close menu' : 'Open menu'}>
                <img
                    src={isMenuOpened ? closeMenu : openMenu}
                    alt="Menu Icons" />
            </button>
        </nav>
    )
}

export default Menu