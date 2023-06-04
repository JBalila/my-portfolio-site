import NavButton from './NavButton';
import Icon from './Icon';

export default function Navbar() {
    return(
        <div className='navbar-container'>
            <div className='left-side'>
                <NavButton name='Home' link='/' />
                <NavButton name='Projects' link='/projects' />
            </div>

            <div className='right-side'>
                <Icon srcImg='github.png' alt='Links to Github' link='https://github.com/JBalila' />
                <Icon srcImg='linkedin.png' alt='Links to LinkedIn' link='https://linkedin.com/in/joshuaybalila' />
            </div>
        </div>
    );
}