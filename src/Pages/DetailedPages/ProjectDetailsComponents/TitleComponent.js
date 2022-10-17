import React, { useState, useEffect } from 'react';
import classes from './ProjectDetails.module.css'
// import GithubLogo from '../../../Logos/Github.svg'

const TitleComponent=(props)=>{
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        let node = document.getElementById("TitleHeader")
        if ( typeof  node != 'undefined')
        {
            
            if (props.scrollOffset >= (node.offsetTop - 700) && loadStyle.opacity == 0)
            {
                setLoadStyle({opacity:1})
            }
        }
    }
    useEffect(()=>{
        LoadComponent();
     },[props.scrollOffset])
    return(
    <div id="TitleHeader" className={classes.Container} style={loadStyle}>
        <div className={classes.ProjectTitleContainer}>
            <div className={classes.ProjectTitle}>{props.titleTextProp}</div>
            <div className={classes.ProjectDescription}>{props.Description}</div>
        </div>
      

    </div>)
}
export default TitleComponent;
