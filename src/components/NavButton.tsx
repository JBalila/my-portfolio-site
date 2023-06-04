import { Link } from 'react-router-dom';

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