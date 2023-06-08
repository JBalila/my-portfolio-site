import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IMAGES_FOLDER } from '../../functions/globalConstants';

import './home.css';

export default function Home() {
    return(
        <div className='page'>
            <Navbar currentPage='Home' />
            <div className='home-container'>
                {/* Left third of page */}
                <div className='home-bio'>
                    <h2 className='home-header'>Hello! I'm Joshua Balila.</h2>
                    <p>
                        I'm a recent graduate from the University of Central Florida, having obtained a
                        Bachelor's degree in Computer Science. In my studies at UCF, I was able to learn
                        both the theory behind the field of Computer Science - algorithm analysis, data
                        structures, compiler construction, etc. - as well as the concrete application of
                        those theories.
                    </p>
                    <img className='home-logo' src={`${IMAGES_FOLDER}/react.png`} alt='React logo' />
                    <img className='home-logo' src={`${IMAGES_FOLDER}/typescript.png`} alt='TypeScript logo' />
                    <p>
                        In the Projects tab, you can see a handful of the projects I've completed and 
                        released while at UCF. Although some of these projects were done independently,
                        most were completed with various teams of other developers, allowing me to improve
                        my skills in team-coordination and communication. 
                    </p>
                </div>

                {/* Middle third of page */}
                <div className='home-pics'>
                    <img className='home-headshot' src={`${IMAGES_FOLDER}/headshot.png`} alt='Headshot portrait of myself' />
                </div>

                {/* Right third of page */}
                <div className='home-skills'>
                    <h2 className='home-header'>Education</h2>
                    <h4 className='home-sub-header'>University of Central Florida - Honors College, Orlando, FL</h4>
                    <p>
                        Bachelor of Science in Computer Science, specializing in Software Engineering
                        and Full-Stack Development
                    </p>
                    <p>
                        (August 2019 - May 2023)
                    </p>
                    <br />

                    <h2 className='home-header'>Technical Skills</h2>
                    <h4 className='home-sub-header'>Computer Languages</h4>
                    <p>C, C++, Java, HTML5, Javascript/Typescript, Node.js, Python</p>

                    <h4 className='home-sub-header'>Frameworks</h4>
                    <p>React, LAMP stack, MERN stack</p>

                    <h4 className='home-sub-header'>Database Management</h4>
                    <p>MongoDB, MySQL</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}