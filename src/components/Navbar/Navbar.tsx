import NavButton from './NavButton';
import IconLink from '../Icon/IconLink';

import './navbar.css';

interface NavbarProps {
    currentPage: string
}

export default function Navbar({currentPage}: NavbarProps) {
    return(
        <div className='navbar-container'>
            <div className='left-side'>
                <NavButton name='Home' link='/' currentPage={currentPage} />
                <NavButton name='Projects' link='/projects' currentPage={currentPage} />
            </div>

            <div className='right-side'>
                <IconLink srcImg='github.svg' altText='Links to Github' link='https://github.com/JBalila' />
                <IconLink srcImg='linkedin.svg' altText='Links to LinkedIn' link='https://linkedin.com/in/joshuaybalila' />
            </div>
        </div>
    );
}