import { NavLink } from 'react-router-dom'
//import { ReactComponent as Icon} from '../../assets/icons/family-circles-logo.svg'
import './navmenu.css'

//https://www.codevertiser.com/reactjs-responsive-navbar

const NavMenu = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>y
            </div>
        </nav>
    )
}

export default NavMenu