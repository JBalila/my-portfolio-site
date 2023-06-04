import NavButton from './NavButton';
import IconLink from './IconLink';

export default function Navbar() {
    return(
        <div className='navbar-container'>
            <div className='left-side'>
                <NavButton name='Home' link='/' />
                <NavButton name='Projects' link='/projects' />
            </div>

            <div className='right-side'>
                <IconLink srcImg='github.png' link='https://github.com/JBalila' />
                <IconLink srcImg='linkedin.png' link='https://linkedin.com/in/joshuaybalila' />
            </div>
        </div>
    );
}