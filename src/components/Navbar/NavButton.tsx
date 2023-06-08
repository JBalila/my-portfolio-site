import { Link } from 'react-router-dom';

import './navbar.css';

interface NavButtonProps {
    name: string,
    link: string,
    currentPage: string
}

export default function NavButton({name, link, currentPage}: NavButtonProps) {
    return(
        <Link id={name === currentPage ? 'navbar-button-active' : ''} className='navbar-button' to={link}>
            {name}
        </Link>
    );
}