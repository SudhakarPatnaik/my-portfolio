
import './NavBar.css';
import logo from '../../assets/logo.png';
import desktopMenuImage from '../../assets/contact.png';
import { Link } from 'react-scroll';
const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} className='logo' />
                <div className='desktopMenu'>
                    <Link className='desktopMenuListItem'>Home</Link>
                    <Link className='desktopMenuListItem'>About</Link>
                    <Link className='desktopMenuListItem'>Portfolio</Link>
                    <Link className='desktopMenuListItem'>Clients</Link>
                </div>
                <button className='desktopMenuButton'>
                    <img src={desktopMenuImage} className='desktopMenuImage' />Contact Me
                </button>
            </nav>
        </div>
    )
}

export default NavBar;