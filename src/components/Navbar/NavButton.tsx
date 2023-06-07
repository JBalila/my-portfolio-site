import { Link } from 'react-router-dom';

import './navbar.css';

interface NavButtonProps {
    name: string,
    link: string,
    active?: boolean
}

export default function NavButton({name, link, active}: NavButtonProps) {
    return(
        <Link id={active ? 'nav-button-active' : ''} className='navbar-button' to={link}>
            {name}
        </Link>
    );
}