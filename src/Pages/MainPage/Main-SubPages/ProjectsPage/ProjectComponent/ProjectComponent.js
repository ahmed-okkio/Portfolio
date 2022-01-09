import React from 'react';
import classes from './ProjectComponent.module.css';
import {Link} from 'react-router-dom'

const ProjectComponent = (props) => {
    return(
        <div className={classes.ProjectContainer}>
           {props.devBlog ? <div className={classes.DevBlogHeader}>Click me! Im on the dev blog!</div> : <></>} 
        <Link to={props.link} onClick={() => window.scrollTo(0, 0)}>
                <div className={classes.VisibleContainer}>
                    <canvas className={classes.animatedBorder}/>
                    <div className={classes.imageContainer}>
                        <img src={props.preview}/>
                    </div>
                </div>  
        </Link>
            <div className={classes.ProjectName}>{props.projectName}</div>
            <div className={classes.ProjectDescription}>
                {props.desc}
            </div>
            
        </div>
    )
}
export default ProjectComponent;