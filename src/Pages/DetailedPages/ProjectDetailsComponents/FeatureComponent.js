import React from 'react';
import classes from './ProjectDetails.module.css'
import ReactPlayer from 'react-player/youtube'
import CustomCollapsible from './CustomCollapsible';

const FeatureComponent=(props)=>{
   let playerRef = React.createRef()
    const onEndedHandle = () =>{
        playerRef.current.showPreview()
    }
    return(
            <CustomCollapsible isOpen={props.isOpen} title = {props.featureTitleText}>
            {/* <div className={classes.Heading}>{props.featureTitleText}</div> */}
            <div className={classes.VideoContainer}>
                <div className={classes.ProjectVideo}>
                    <ReactPlayer
                        className={classes.ReactPlayer}
                        width= '100%'
                        height= '100%'
                        controls = {true}
                        light = {true}
                        url={props.featureLink}
                        config={{
                            youtube: {
                              playerVars: { rel: 0 }
                            }
                          }}
                        onEnded={onEndedHandle}
                        ref={playerRef}
                    />
                </div>
            </div>
            <div className={classes.FeatureDescription}>{props.featureDescription}</div>
                {props.children}
            </CustomCollapsible>
    )
}
export default FeatureComponent