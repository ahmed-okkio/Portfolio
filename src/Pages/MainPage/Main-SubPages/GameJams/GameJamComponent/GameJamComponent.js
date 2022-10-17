import React from 'react';
import classes from '../../ProjectsPage/ProjectComponent/ProjectComponent.module.css';

const ProjectComponent = (props) => {
    return(
        <div className={classes.ProjectContainer}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
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
            <div className={classes.ProjectTags}>{props.tags}</div>
        </div>
    )
}
export default ProjectComponent;