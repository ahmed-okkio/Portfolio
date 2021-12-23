import React, { useState, useEffect } from 'react';
import classes from './IntroPage.module.css'
import DoubleArrow from '../../../../Logos/DoubleArrow.svg';
import Intro from '../../../../Assets/Intro.mp4';


const WelcomeText = () => {
    const [textStyle, setTextStyle] = useState();
    const [text, setText] = useState();
    const [arrowStyle, setArrowStyle] = useState();

    const welcomeAnimation = (text) =>{
        setText(text)
        setTextStyle({
            fontSize:`${4}em`,
            opacity:1
        });
        setTimeout(()=>{
            setTextStyle({
                opacity:0
            })
        },700)
    }
    useEffect(()=>{
        welcomeAnimation('Hi');
        setTimeout(()=> {
            welcomeAnimation("Welcome To My Portfolio");
            setArrowStyle({opacity:1})
            setTimeout(()=>{
                setTextStyle({
                    opacity:1
                })
            },700)
        },1200)
    },[]);
    return(
        <>
            <div className={classes.WelcomeTextContainer}>
                <span className={classes.WelcomeText} style={textStyle}>{text}</span>
            </div>
            <img className={classes.DoubleArrow} style={arrowStyle} src={DoubleArrow}/>
            <div className={classes.IntroContainer}>
                <div className={classes.IntroContainerTwo}>
                    {/* <video className={classes.Intro} autoPlay loop muted> */}
                            {/* <source src={Intro}  type="video/mp4"> */}
                            {/* </source> */}
                    {/* </video> */}
                </div>
            </div>
            
        </>
    )
}
export default WelcomeText;