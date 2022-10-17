import React, {useEffect,useState} from 'react';
import classes from './ProjectsContainer.module.css';
import ProjectComponent, {ExternalProjectComponent} from './ExperienceComponent/ExperienceComponent';
import IGIOrigins from '../../../../Assets/IGIOrigins.png';
import AMGLOGO from '../../../../Assets/AMGLOGO.png';



const ExperienceContainer = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});


    var desc2 = [`Re-imagining a pioneer of the tactical first-person shooter genre with I.G.I. Origins, the prequel to 2000’s Project I.G.I.`,<br/>,
    `Key responsibilities:`,<br/>,
    ` - Implementing core gameplay features.`,<br/>,
    ` - Implementing reusable UI elements.`,<br/>,
    ` - Implementing gamepad controls for UI and gameplay.`,<br/>,
    ` - Investigating and fixing bugs.`]
    let tags2 = "Unreal Engine 5, C++, Blueprint"
    var link2 = "https://www.igithegame.com/"



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
        <div className={classes.Header}  id="ProjectsHeader" style={loadStyle}>PROFESSIONAL EXPERIENCE</div>
        <div className={classes.ProjectsContainer} style={loadStyle}>
            <ExternalProjectComponent projectName="IGI Origins" desc={desc2}
                tags={tags2}
                preview={IGIOrigins}
                link={link2}
                devBlog={false}
                CompanyName="AntiMatter Games"
                CompanyLogo={AMGLOGO}/>
        </div>
        </>
    )
}
export default ExperienceContainer;