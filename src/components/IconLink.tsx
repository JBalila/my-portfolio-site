interface IconLinkProps {
    srcImg: string,
    link: string
}

const IMAGES_FOLDER = 'images/';

export default function IconLink({srcImg, link}: IconLinkProps) {
    return(
        <a className='icon-wrapper' href={link}>
            <img src={IMAGES_FOLDER + srcImg} alt={`Links to ${link}`} />
        </a>
    );
}