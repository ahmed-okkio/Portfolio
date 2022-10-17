import React, {useEffect,useState} from 'react';
import classes from './ProjectsContainer.module.css';
import ProjectComponent, {ExternalProjectComponent} from './ProjectComponent/ProjectComponent';
import SudokuPreview from '../../../../Assets/Sudoku.png';
import WnSPreview from '../../../../Assets/WokeAndShootThumb.jpg';



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    var desc1 = [`This is an online Sudoku puzzle game with an intuitive UI,
     authentication and a leader board built using the MERN stack. It is a 
     responsive single page application fully designed and developed by me 
     from the ground up. A second version of this site was made using Firebase.`
     ,<br/>,<i style={{fontSize:`${12}px`} }>~ Site may take up to 20 seconds to load</i>]
     let tags1 = "React, ExpressJS, MongoDB, JavaScript, CSS"
    var link1 = "https://sudoku-mern.herokuapp.com/#/"

    var desc2 = [`WOKEN is an online multiplayer fast paced FPS prototype built
     on Unreal Engine 4 primarily in C++ with the assistance of blueprints.
     This is my largest continuing project allowing me to take on and learn about 
     concepts such as networking and custom player movement. It also acts as a platform
     to execute other projects on programming gameplay mechanics.`]
    let tags2 = "Unreal Engine, C++, Blueprint"
    var link2 = "/Woken"



    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("ProjectsHeader")
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
        <div className={classes.Header}  id="ProjectsHeader" style={loadStyle}>FEATURED PROJECTS</div>
        <div className={classes.ProjectsContainer} style={loadStyle}>
            <ProjectComponent projectName="WOKEN (WIP)" desc={desc2} tags={tags2} preview={WnSPreview} link={link2} devBlog={true}/>
            <ExternalProjectComponent projectName="SUDOKU MERN" desc={desc1} tags={tags1} preview={SudokuPreview} link={link1}/>
            {/* <ExternalProjectComponent projectName="Custom Melee System" desc={desc1} preview={SudokuPreview} link={link1}/> */}

            {/* <ProjectComponent projectName="SUDOKU MERN" desc={desc1} preview={SudokuPreview} link={link}/> */}
            {/* <ProjectComponent projectName="Test" desc={"test2"} preview={"test"}/>  */}
        </div>
        </>
    )
}
export default ProjectsContainer;