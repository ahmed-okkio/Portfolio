import React, {useEffect,useState} from 'react';
import classes from './ProjectsContainer.module.css';
import ProjectComponent from './ProjectComponent/ProjectComponent';
import SudokuPreview from '../../Assets/Sudoku.png';



const ProjectsContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0});
    if (props.scrollOffset >= 600 && loadStyle.opacity == 0)
    {
        setLoadStyle({opacity:1})
    }
    const DisplayProjects = () => {
        var desc;
        var preview;
    }
    var desc1 = `This is a test project with a testing in the test 
    location that tests how to test. We continue to do our testing 
    until the desired result is found`
    var link = "https://sudoku-mern.herokuapp.com/#/"
    
    return(
        <div className={classes.ProjectsContainer} style={loadStyle}>
            <ProjectComponent desc={desc1} preview={SudokuPreview} link={link}/>
            <ProjectComponent desc={"test2"} preview={"test"}/> 
        </div>
    )
}
export default ProjectsContainer;