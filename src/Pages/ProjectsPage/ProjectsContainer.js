import React, {useEffect,useState} from 'react';
import classes from './ProjectsContainer.module.css';
import ProjectComponent from './ProjectComponent/ProjectComponent';
import SudokuPreview from '../../Assets/Sudoku.png';



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    var desc1 = `This is a test project with a testing in the test 
    location that tests how to test. We continue to do our testing 
    until the desired result is found`
    var link = "https://sudoku-mern.herokuapp.com/#/"



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
            <ProjectComponent projectName="Sudoku MERN" desc={desc1} preview={SudokuPreview} link={link}/>
            <ProjectComponent projectName="Test" desc={"test2"} preview={"test"}/> 
        </div>
        </>
    )
}
export default ProjectsContainer;