import { useNavigate } from 'react-router-dom'
import Logo from '../../images/logo-icon.webp'

const Header = () => {

    const Nav = useNavigate();

    return (
        <header onClick={() => Nav('/')} className='flex lg:w-[1200px] cursor-pointer py-5 text-center m-auto justify-center max[900px]: w-[100%] '>
            <img className='lg:w-[135px] max[900px]: w-[90px]' src={Logo} />
        </header>
    )
}

export default Header