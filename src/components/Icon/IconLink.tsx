import { IMAGES_FOLDER } from '../../globals/globalConstants';

import './icon.css';

interface IconLinkProps {
    srcImg: string,
    altText: string,
    link: string
}

export default function Icon({srcImg, altText, link}: IconLinkProps) {

    return(
        <a className='icon-link-wrapper' href={link} target='_blank' rel='noreferrer noopener'>
            <img src={`${IMAGES_FOLDER}/${srcImg}`} alt={altText} />
        </a>
    );
}