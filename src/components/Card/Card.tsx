import './card.css';

interface CardProps {
    imgSrc: string,
    imgText: string,
    altText: string,
    link: string
}

const IMAGES_FOLDER = 'images/';

export default function Card({imgSrc, imgText, altText, link}: CardProps) {
    return(
        <a className='card-wrapper' href={link}>
            <img className='card-image' src={IMAGES_FOLDER + imgSrc} alt={altText} />
            <div className='card-overlay'>{imgText}</div>
        </a>
    );
}