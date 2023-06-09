import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

import './projects.css';

export default function Projects() {
    return(
        <div className='page'>
            <Navbar currentPage='Projects' />
            <div className='projects-container'>
                <Card imgSrc='synesthize.png'
                    imgText='Synesthize - A website and corresponding application designed to convert
                        musical notes into color.'
                    altText='Synesthize Logo'
                    link='https://synesthize.com/' />
                <Card 
                    imgSrc='asiko.png'
                    imgText='ASIKO - A fun ragdoll-based action-adventure game developed in Unity, released
                        on itch.io.'
                    altText='ASIKO logo'
                    link='https://demonicmind.itch.io/asiko' />
                <Card 
                    imgSrc='art-share.png'
                    imgText='Art-Share - An image sharing website allowing users to upload/edit/delete images,
                        like images, and send friend-requests.'
                    altText='Art-Share login screen'
                    link='https://github.com/JBalila/art-share' />
            </div>
            <Footer />
        </div>
    );
}