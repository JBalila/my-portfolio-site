import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/Icon';

export default function Home() {
    return(
        <>
            <Navbar />
            <div className='home-container'>
                {/* Left third of page */}
                <div className='home-bio'>
                    <h2>Hello! I'm Joshua Balila.</h2>
                    <p>
                        I'm a recent graduate from the University of Central Florida, having obtained a
                        Bachelor's degree in Computer Science. In my studies at UCF, I was able to learn
                        both the theory behind the field of Computer Science - algorithm analysis, data
                        structures, compiler construction, etc. - as well as the concrete application of
                        those theories.
                    </p>
                    <Icon srcImg='react.png' altText='React logo' />
                    <Icon srcImg='typescript.png' altText='TypeScript logo' />
                    <p>
                        In the Projects tab, you can see a handful of the projects I've completed and 
                        released while at UCF. Although some of these projects were done independently,
                        most were completed with various teams of other developers, allowing me to improve
                        my skills in team-coordination and communication. 
                    </p>
                </div>

                {/* Middle third of page */}
                <div className='home-pics'>
                </div>

                {/* Right third of page */}
                <div className='home-skills'>
                    <h2>Education</h2>
                    <b>University of Central Florida - Honors College, Orlando, FL</b>
                    <p>
                        Bachelor of Science in Computer Science, specializing in Software Engineering
                        and Full-Stack Development
                    </p>
                    <p>
                        (August 2019 - May 2023)
                    </p>
                    <br />

                    <h2>Technical Skills</h2>
                    <h4 className='sub-heading'>Computer Languages</h4>
                    <p>C, C++, Java, HTML5, Javascript/Typescript, Node.js, Python</p>

                    <h4 className='sub-heading'>Frameworks</h4>
                    <p>React, LAMP stack, MERN stack</p>

                    <h4 className='sub-heading'>Database Management</h4>
                    <p>MongoDB, MySQL</p>
                </div>
            </div>
            <Footer />
        </>
    );
}