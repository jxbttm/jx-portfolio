import LinkedInIcon from '../assets/icons/linkedin-icon.png';
import GithubIcon from '../assets/icons/github-icon.jpg';

function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#experience-section">Experience</a></li>
                    {/* <li><a href="#contact-section">Contact</a></li> */}
                </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/soojingxuan/'>
                        <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href='https://github.com/jxbttm'>
                        <img src={GithubIcon} alt="Github" className="w-6 h-6" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}
export default Footer;