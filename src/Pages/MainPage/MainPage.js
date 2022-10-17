import React from 'react';
import classes from './MainPage.module.css';
import IntroPage from './Main-SubPages/IntroPage/IntroPage';
import BackgroundPage from './Main-SubPages/BackgroundPage/BackgroundPage';
import SkillsPage from './Main-SubPages/SkillsPage/SkillsPage';
import ExperienceContainer from './Main-SubPages/ExperiencePage/ExperienceContainer';
import ProjectsContainer from './Main-SubPages/ProjectsPage/ProjectsContainer';
import GameJamContainer from './Main-SubPages/GameJams/GameJamContainer';
import FinalPage from './Main-SubPages/FinalPage/FinalPage';


const MainPage = (props) =>
{
    return(
        <>
            <div className={classes.mainBody}>
                {/* <div className={classes.Page} >
                    <IntroPage/>
                </div> */}
                 <div className={classes.Page}>
                    <ExperienceContainer scrollOffset={props.scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <ProjectsContainer scrollOffset={props.scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <GameJamContainer scrollOffset={props.scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <SkillsPage scrollOffset={props.scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <BackgroundPage scrollOffset={props.scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <FinalPage scrollOffset={props.scrollOffset}/>
                </div>
        
            </div>
        </>
    )
}
export default MainPage;