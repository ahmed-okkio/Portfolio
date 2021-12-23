import React, {useEffect,useState} from 'react';
import classes from './ProjectsContainer.module.css';
import ProjectComponent from './ProjectComponent/ProjectComponent';
import SudokuPreview from '../../../../Assets/Sudoku.png';
import WnSPreview from '../../../../Assets/WokeAndShootThumb.png';



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    var desc1 = [`This is an online Sudoku puzzle game with an intuitive UI,
     authentication and a leader board built using the MERN stack. It is a 
     responsive single page application fully designed and developed by me 
     from the ground up. A second version of this site was made using Firebase.`
     ,<br/>,<i style={{fontSize:`${12}px`} }>~ Site may take up to 20 seconds to load</i>]
    var link1 = "https://sudoku-mern.herokuapp.com/#/"

    var desc2 = [`WnS is an online multiplayer fast paced FPS game built
     on Unreal Engine 4 primarily in C++ with the assistance of blueprints.
     This is my largest continuing project allowing me to take on challenging 
     concepts such as networking custom player movement, movement prediction,
     roll back validatation and production experiences like testing, shipping and patching.` ,<br/>,<br/>, 
     `The game has already met its initial project scope, but still recieves intermittent patching.`]
    var link2 = "https://github.com/ahmedhamad-okkio/WokeAndShoot"



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
            <ProjectComponent projectName="WnS (WIP)" desc={desc2} preview={WnSPreview} link={link2}/>
            <ProjectComponent projectName="SUDOKU MERN" desc={desc1} preview={SudokuPreview} link={link1}/>

            {/* <ProjectComponent projectName="SUDOKU MERN" desc={desc1} preview={SudokuPreview} link={link}/> */}
            {/* <ProjectComponent projectName="Test" desc={"test2"} preview={"test"}/>  */}
        </div>
        </>
    )
}
export default ProjectsContainer;