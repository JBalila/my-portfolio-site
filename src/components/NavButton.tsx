interface NavButtonProps {
    name: string,
    link: string,
    active?: boolean
}

export default function NavButton({name, link, active}: NavButtonProps) {
    return(
        <a id={active ? 'nav-button-active' : ''} className='navbar-button' href={link}>
            {name}
        </a>
    );
}