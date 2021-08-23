import React from 'react';
import classes from './ProjectComponent.module.css';

const ProjectComponent = (props) => {
    return(
        <div className={classes.ProjectContainer}>
        <a href={props.link} target="_blank">
                <div className={classes.VisibleContainer}>
                    <canvas className={classes.animatedBorder}/>
                    <div className={classes.imageContainer}>
                        <img src={props.preview}/>
                    </div>
                </div>  
            </a>
            <div className={classes.ProjectName}>{props.projectName}</div>
            <div className={classes.ProjectDescription}>
                {props.desc}
            </div>
            
        </div>
    )
}
export default ProjectComponent;