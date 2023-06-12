import { IMAGES_FOLDER } from '../../globals/globalConstants';

import './card.css';

interface CardProps {
    imgSrc: string,
    imgText: string,
    altText: string,
    link: string
}

export default function Card({imgSrc, imgText, altText, link}: CardProps) {
    return(
        <a className='card-wrapper' href={link} target='_blank' rel='noreferrer noopener'>
            <img className='card-image' src={`${IMAGES_FOLDER}/${imgSrc}`} alt={altText} />
            <div className='card-overlay'>{imgText}</div>
        </a>
    );
}