import JxTechHubIcon from '../assets/icons/jxtechhub-icon.png';

function Header() {
    return (

        <div className="navbar">
            <div className="navbar-start">
                <a href='https://github.com/JXTechHub'>
                    <img src={JxTechHubIcon} alt="LinkedIn" className="w-28 h-28" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#experience-section">Experience</a></li>
                    {/* <li><a href="#contact-section">Contact</a></li> */}
                </ul>
            </div>
        </div>
    )
}


export default Header;