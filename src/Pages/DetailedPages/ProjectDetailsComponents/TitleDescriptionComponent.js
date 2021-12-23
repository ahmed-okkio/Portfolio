import React from 'react';
import classes from './ProjectDetails.module.css'
import ReactPlayer from 'react-player/youtube'

const TitleDescription=(props)=>{
    return(
    <div className={classes.Container}>
        <div className={classes.ProjectTitle}>{props.titleTextProp}</div>
        <div className={classes.ProjectDescription}>{props.Description}</div>
        <div className={classes.ProjectVideo}>
            <ReactPlayer
                className={classes.ReactPlayer}
                width= '100%'
                height= '100%'
                url='https://www.youtube.com/watch?v=OCtv9ptTBmQ'
            />
        </div>

    </div>)
}
export default TitleDescription;