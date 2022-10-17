import React, {useEffect,useState} from 'react';
import classes from './SkillsPage.module.css';

const SkillsPage = (props) =>{
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("SkillsHeader")
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
            <div id="SkillsHeader" className={classes.Header}  style={loadStyle}>SKILLS</div>
            <div style={loadStyle} className={classes.skillsContainer}>
                <div className={classes.languagesContainer}>
                    <div className={classes.languagesHeader}>Languages</div>
                    <ul className={classes.languages}>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Java</li>   
                        <li>JavaScript</li>
                        <li>Kotlin</li>
                        <li>C#</li>
                        <li>SQL</li>

                    </ul>
                </div>
                <div className={classes.enginesContainer}>
                    <div className={classes.enginesHeader}>Engines/Frameworks</div>
                    <ul className={classes.engines}>
                        <li>Unreal Engine</li>
                        <li>React</li>
                        <li>Django</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className={classes.softwareContainer}>
                    <div className={classes.softwareHeader}>Software/Tools</div>
                    <ul className={classes.software}>
                        <li>Jira</li>
                        <li>Miro</li>
                        <li>Perforce/Git</li>
                        <li>Jenkins</li>
                        <li>Trello</li>
                        <li>Vegas Pro</li>
                        <li>Adobe Photoshop</li>                      
                    </ul>
                </div>
            </div>
            <div className={classes.separator}></div>
        </>
    )
}
export default SkillsPage;