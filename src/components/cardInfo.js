import React, {useState} from 'react';
import {useSpring,animated} from 'react-spring';


function cardInfo(props){
    //const animationStyle = useSpring({opacity:1,from:{opacity : 0}});
    return(
       // <animated.div className="g-card-info" style={animationStyle}>
           <div>
                <p className="g-card-title">{props.title}</p>
                <p className="g-card-sub-title">{props.subtitle}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
           </div>
        //</animated.div>
    );
}

export default cardInfo;