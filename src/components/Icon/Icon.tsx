import './icon.css';

interface IconProps {
    srcImg: string,
    altText: string,
    link?: string
}

const IMAGES_FOLDER = 'images/';

export default function Icon({srcImg, altText, link}: IconProps) {

    if (link)
        return(
            <a className='icon-wrapper' href={link} target='_blank' rel='noreferrer noopener'>
                <img src={IMAGES_FOLDER + srcImg} alt={altText} />
            </a>
        );
    else
        return(
            <img src={IMAGES_FOLDER + srcImg} alt={altText} />
        );
}