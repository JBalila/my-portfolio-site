interface IconProps {
    srcImg: string,
    alt: string,
    link?: string
}

const IMAGES_FOLDER = 'images/';

export default function Icon({srcImg, alt, link}: IconProps) {

    if (link)
        return(
            <a className='icon-wrapper' href={link}>
                <img src={IMAGES_FOLDER + srcImg} alt={alt} />
            </a>
        );
    else
        return(
            <img src={IMAGES_FOLDER + srcImg} alt={alt} />
        );
}