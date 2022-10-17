import React, {useEffect,useState} from 'react';
import classes from '../ProjectsPage/ProjectsContainer.module.css';
import GameJamComponent from './GameJamComponent/GameJamComponent';
import Rewild from '../../../../Assets/Rewild.png'
import TooSquare from '../../../../Assets/TooSquare.png'



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    let desc1 = `Rewild is an original entry to the DGDF game jam that integrates the Web Monetization
    API with Unity WebGL games. During this game jam I was able to quickly learn Unity by transferring my
    experience in Unreal Engine to swiftly start implementing key aspects of the game. Furthermore, I integrated
    the Web Monetization API within the core gameplay. This project also included understanding and debugging the Web Monetization
    JS wrapper after meeting compatibility issues.
    `
    let tags1 = "Unity, C#, JavaScript"
    let link1 = "https://gamejolt.com/games/ReWild/640577"


    let desc2 = `Too Square is a completely original game jam entry to the 2022 Global Game Jam. 
    The game is a 2D puzzle platform using this years jam theme "Duality". Some of my work includes
    implementation of core gameplay mechanics such as changing dimensions, in-game collectables and interactables.
    As well as other work like creating original sound effects and co-desiging levels. However, the greatest acomplishment
    would be balancing and controlling scope to deliver the game vision on time.`
    let tags2 = "Unity, C#"
    let link2 = "https://globalgamejam.org/2022/games/toosquare-7"



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
            <GameJamComponent projectName="Too Square" desc={desc2} tags={tags2} preview={TooSquare  } link={link2}/>
            <GameJamComponent projectName="Rewild" desc={desc1} tags={tags1} preview={Rewild} link={link1}/>

            {/* <ProjectComponent projectName="SUDOKU MERN" desc={desc1} preview={SudokuPreview} link={link}/> */}
            {/* <ProjectComponent projectName="Test" desc={"test2"} preview={"test"}/>  */}
        </div>
        </>
    )
}
export default ProjectsContainer;