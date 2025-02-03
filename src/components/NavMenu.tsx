import { ReactComponent as Brand } from '../../assets/icons/family-circles-logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div>
                <Brand />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar