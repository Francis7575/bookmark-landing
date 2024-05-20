import logo from '/assets/logo-bookmark.svg'
import Menu from './Menu'

const Header = () => {
    return (
        <header className='flex items-center justify-between pt-[2.5rem] px-[2rem] lg:px-16 xl:max-w-[69rem] xl:mx-auto xl:px-0'>
            <div>
                <img src={logo} alt="Bookmark logo" />
            </div>
            <Menu />
        </header>
    )
}

export default Header