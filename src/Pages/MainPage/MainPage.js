import React, {useState, useEffect} from 'react';
import classes from './MainPage.module.css';
import WelcomeText from './Components/WelcomeText';
import ProjectsContainer from '../ProjectsPage/ProjectsContainer';
import FinalPage from '../FinalPage/FinalPage';

const MainPage = () =>
{
    const [scrollOffset, setScrollOffset] = useState(0);
    const handleScroll = () => setScrollOffset(window.pageYOffset);
    const getScrollOffset = () =>{
        console.log(scrollOffset);
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
    return(
        <>
            <div className={classes.mainBody}>
                <div className={classes.Page} onClick={getScrollOffset}>
                    <WelcomeText/>
                </div>
                <div className={classes.Page}>
                    <ProjectsContainer scrollOffset={scrollOffset}/>
                </div>
                <div className={classes.Page}>
                    <FinalPage/>
                </div>
            </div>
        </>
    )
}
export default MainPage;