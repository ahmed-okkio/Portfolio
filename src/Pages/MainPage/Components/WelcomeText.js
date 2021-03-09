import React, { useState, useEffect } from 'react';
import classes from './WelcomeText.module.css'
import DoubleArrow from '../../../Logos/DoubleArrow.svg';


const WelcomeText = () => {
    const [textStyle, setTextStyle] = useState();
    const [text, setText] = useState();
    const [arrowStyle, setArrowStyle] = useState();

    const welcomeAnimation = (text) =>{
        setText(text)
        setTextStyle({
            fontSize:`${80}px`,
            opacity:1
        });
        setTimeout(()=>{
            setTextStyle({
                opacity:0
            })
        },2000)
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
            },2000)
        },2700)
    },[]);
    return(
        <>
            <div className={classes.WelcomeTextContainer}>
                <span className={classes.WelcomeText} style={textStyle}>{text}</span>
            </div>
            <img className={classes.DoubleArrow} style={arrowStyle} src={DoubleArrow}/>
        </>
    )
}
export default WelcomeText;