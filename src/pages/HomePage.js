import React from 'react';
import Hero from '../components/hero';
import '../index.css';
import Carousel from '../components/carousel';

function HomePage(props){
    
    return(
        <div className="mainPage">
            <video src='/videos/video-2.mp4' className="mainbody" autoPlay loop muted />
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} picture={props.picture}/>
            <Carousel />
        </div>
    );

}

export default HomePage;