import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content';
function AboutPage(props){

    return(
        <div className="aboutmeDisplay">
            <video src='/videos/aboutMe.mp4' className="mainbody" autoPlay loop muted />
            <Hero title={props.title} />
            <Content>
                <h1>SUMMARY</h1>
                <p>Very dedicated, Goal-driven, organised, and enthusiastic
                     individual. I have a logical mind with a practical approach 
                     to problem solving. I enjoy working in a team.</p>
                <p>INTERESTS</p>
                <p>
                    <ul>
                        <li>
                        <p>Take part in community development work, 
                            motivating and inspiring the youth: GCRA Community service</p>
                        </li>
                        <li>
                        Blogger 
                        </li>
                    </ul>
                </p>

                <h1>EDUCATION</h1>
                <ul>
                    <li>North West University, Vaal Triangle Campus (Present Final Year)</li>
                    <li>ISIZWE-SETJHABA SECONDARY SCHOOL (Matric 2016)</li>
                
                </ul>

                <h1>EXPERIENCE</h1>
                <p>Student instructore at NORTH WEST UNIVERSITY from July 2018 to November 2018</p>
                <p>Duties where:</p>
                <ul>
                    <li>
                    	Conducting extra lessons to over 50 students 
                    </li>
                    <li>
                    	The marking and capturing of scripts and test results 
                    </li>
                </ul>
            </Content>
        </div>
    );

}

export default AboutPage;