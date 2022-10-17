import React, {useEffect,useState} from 'react';
import classes from '../ProjectsPage/ProjectsContainer.module.css';
import GameJamComponent from './GameJamComponent/GameJamComponent';
import Rewild from '../../../../Assets/Rewild.png'



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    var desc2 = `Rewild is an original entry to the DGDF game jam that looks to integrate the Web Monetization
    API with online WebGL games. During this game jam I was able to pick up Unity quickly by transferring my
    experience in Unreal Engine and work on many key aspects of the game by utilizing game programming design 
    patterns such as singletons. As well as integrating game mechanics with the Web Monetization API and debugging
    WebGL build problems.
    `
    var link2 = "https://gamejolt.com/games/ReWild/640577"



    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("GameJamHeader")
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
        <>
        <div className={classes.Header}  id="GameJamHeader" style={loadStyle}>GAME JAMS</div>
        <div className={classes.ProjectsContainer} style={loadStyle}>
            <GameJamComponent projectName="Rewild" desc={desc2} preview={Rewild} link={link2}/>

            {/* <ProjectComponent projectName="SUDOKU MERN" desc={desc1} preview={SudokuPreview} link={link}/> */}
            {/* <ProjectComponent projectName="Test" desc={"test2"} preview={"test"}/>  */}
        </div>
        </>
    )
}
export default ProjectsContainer;