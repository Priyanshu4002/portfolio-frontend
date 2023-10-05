import React from 'react'
import pp from '../assets/priyanshu.jpg';
import Education from './Education';
// import { Carousel } from 'react-responsive-carousel';
import iu from '../assets/invertis.jpg';
import bd from '../assets/bdm.png';
import Skill from './Skill';
import Certification from './Certification';
import wd from '../assets/web design.png';
import js from '../assets/js.png';
import fg from '../assets/figma.png';
import py from '../assets/python.png'
import Project from './Project';
import tx from '../assets/text.png';
import nw from '../assets/news.png';
import tm from '../assets/temperature.png';
import nt from '../assets/netflix.png';
import Contact from './Contact';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
const Home = () => {
  return (
    <div>
    {/* home section start */}
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Priyanshu Shrivastava</div>
                <div className="text-3">And I'm a <span className="typing"></span></div>
            </div>
        </div>
    </section>


            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={pp} alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">I'm Priyanshu and I'm a <span className="typing-2"></span></div>
                            <p>Hello, I'm Priyanshu, a highly motivated and creative individual with a passion for technology and problem-solving. With a background in Bachelors of Computer Application, I have honed
                                my skills in various areas, including web development, programming languages, and coding problem solving. I thrive in dynamic and challenging environments, constantly seeking opportunities to learn and 
                                grow. My ability to think critically and approach projects with a detail-oriented mindset has allowed me to deliver high-quality results. Through my portfolio, I aspire to showcase my projects and experiences, demonstrating my dedication to innovation and contributing 
                                positively to the ever-evolving world of technology.</p>
                            <a href="CV .pdf">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

    {/* Education qualification section */}
            <section className="teams" id="education">
                <div className="max-width">
                    <h2 className="title">My Education Qualification</h2>
                    <div className="carousel owl-carousel">
                    {/* <Carousel
                        infiniteLoop
                        autoPlay
                        showStatus={false}
                        showArrows={false}
                        showThumbs={false}
                        margin = {20}
                        autoplayTimeOut={2000}
                        autoplayHoverPause= {true}
                        > */}
                        <div>
                        <Education 
                            image={iu} 
                            text={"Invertis University (Bareilly)"}
                            p={"Currently pursuing BCA (3rd year) securing overall 85%"}
                        />
                        </div>

                        <div>
                        <Education 
                            image={bd} 
                            text={"BDM Public School (CBSE)"}
                            p={"Completed My Intermediate Education (2021) and secured 94.8%"}
                        />
                        </div>
                                        
                        <div>
                        <Education 
                        image={bd} 
                        text={"BDM Public School (CBSE)"}
                        p={"Completed My High School Education (2019) and secured 88.6%"}
                    />
                        </div>
                    {/* </Carousel> */}
                    </div>
                </div>
            </section>

            {/* skills section start  */}
                <section className="skills" id="skills">
                    <div className="max-width">
                        <h2 className="title">My skills</h2>
                        <div className="skills-content">
                            <div className="column left">
                                <div className="text">My creative skills & experiences.</div>
                                <p> As a dedicated and enthusiastic individual, I possess good proficiency in various programming languages, including JavaScript, Python, C, C++ and Java . My extensive experience with front-end technologies such as React. Alongside my technical abilities, I am an effective communicator and collaborative team player. Through my portfolio, I aim to demonstrate my passion for technology and my commitment to delivering innovative solutions that make a positive impact.</p>
                            </div>
                            <div className="column right">
                                <div>
                                    <Skill language={"HTML"} percent={"90%"}/>
                                </div>
                                <div>
                                    <Skill language={"CSS"} percent={"80%"}/>
                                </div>
                                <div>
                                    <Skill language={"Javacsript"} percent={"70%"}/>
                                </div>
                                <div>
                                    <Skill language={"C , C++"} percent={"85%"}/>
                                </div>
                                <div>
                                    <Skill language={"My SQL"} percent={"70%"}/>
                                </div>
                                <div>
                                    <Skill language={"Python"} percent={"60%"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* skill certification section */}
                <section className="teams" id="certificates">
                    <div className="max-width">
                        <h2 className=" title1 title">Certifications</h2>
                        <div className="carousel owl-carousel">
                            <div>
                                <Certification 
                                  link={"https://www.linkedin.com/learning/certificates/9471965153693e1f4c3cf9b9c29bdbbfd56816127a258e19c527ebcfd9eccdc2"}
                                  text={"Web Design"}
                                  p={"a linkedin learning certification for the completion of web Design tutorial"}
                                  image={wd}
                                />
                            </div>
                            <div>
                                <Certification 
                                  link={"https://www.linkedin.com/learning/certificates/428116f28280df8d8605e52f03efade919c304ad72838e36d88aa1cbae54b085"}
                                  text={"Python Essential training"}
                                  p={"a linkedin learning certification for the completion of Python training"}
                                  image={py}
                                />
                            </div>
                            <div>
                                <Certification 
                                  link={"https://api2.sololearn.com/v2/certificates/CC-DQMDDIOX/image/png"}
                                  text={"Introduction to JavaScript"}
                                  p={"a Sololearn certification for the completion of Introduction to JS"}
                                  image={js}
                                />
                            </div>
                            <div>
                                <Certification 
                                  link={"https://www.linkedin.com/learning/certificates/3367944f1b8973ab687c9d2d0ff1f2113b86fb79680ce5a70f873e8c3fd18f82"}
                                  text={"Designing Accessible Component in Figma"}
                                  p={"a linkedin learning certification for the completion of the course"}
                                  image={fg}
                                />
                            </div>
                        </div>
                    </div>
                </section> 
                
    {/* projects section start */}
                <section className="teams" id="projects">
                    <div className="max-width">
                        <h2 className="title2 title">My Projects</h2>
                        <div className="carousel owl-carousel">  
                            <div>
                                <Project image={tx} 
                                text={"Textutils"} 
                                p={"an application to apply various operation on text ."}
                                link={"https://github.com/Priyanshu4002/textutils-react/tree/main/firstapp"}
                                />
                            </div>
                            <div>
                                <Project image={nw} 
                                text={"News Web App"} 
                                p={"an application to read the top headlines of the newspaper"}
                                link={"https://github.com/Priyanshu4002/News-Webapp/tree/master"}
                                />
                            </div>
                            <div>
                                <Project image={nt} 
                                text={"Netflix Clone"} 
                                p={"i develop the netflix homepage clone using HTML and CSS ."}
                                link={"https://github.com/Priyanshu4002/Netflix-Clone/tree/master"}
                                />
                            </div>
                            <div>
                                <Project image={tm} 
                                text={"Temperature Converter"} 
                                p={"website to convert Celsius to fahrenheit and vice-versa."}
                                link={"https://github.com/Priyanshu4002/News-Webapp/tree/master"}
                                />
                            </div>
                        </div>
                    </div>
                </section>  
                
                <Contact />
               
    </div>
  )
}

export default Home
