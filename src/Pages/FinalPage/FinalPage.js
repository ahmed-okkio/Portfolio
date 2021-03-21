import React, {useState,useEffect} from 'react';
import classes from './FinalPage.module.css';
import Bonfire from '../../Assets/Bonfire.mp4';
import Overlay from '../../Assets/VignetteOverlay.png';



const FinalPage = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    const [loadStyle1,setLoadStyle1] = useState({opacity:0});
    const [loadStyle2,setLoadStyle2] = useState({opacity:0});
    

    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("Greetings")
        if ( typeof  node != 'undefined')
        {
            
            if (node.getBoundingClientRect().top < 800 && loadStyle.opacity == 0)
            {
                console.log(node.getBoundingClientRect());
                setLoadStyle({transform: `translateX(${0}px)`})
                setLoadStyle1({});
                setLoadStyle2({transform: `translateX(${0}px)`})
            }
        }
    }
    useEffect(()=>{
       LoadComponent();
    },[props.scrollOffset])
    return(
        <div className={classes.FinalPageContainer}>
            <div id="Greetings"className={classes.Greetings} style={loadStyle}>Have a rest, traveler...<br/></div>
            <div className={classes.BonfireContainer} style={loadStyle1}>
                <img className={classes.Overlay} src={Overlay}></img>
                <video className={classes.Bonfire} autoPlay loop muted>
                    <source src={Bonfire} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className={classes.Warning} style={loadStyle2}>The road ahead is filled with many problems...</div>
            <div className={classes.Warning2} style={loadStyle2}>...Get the right person to help solve them.</div>
            <a  href="mailto:contactokkio@gmail.com"  target="_blank"  style={loadStyle} className={classes.contactMail}>contactokkio@gmail.com</a>
            <div className={classes.Footer}>
                <div className={classes.Credits}>
                    <div className={classes.whiteBar}></div>
                    
                    <div>
                        DESIGNED& <br/>DEVELOPED BY <br/> <div className={classes.Name}>AHMED HAMAD <br/>2021</div>
                    </div>
                </div>
                <div className={classes.Version}>
                    Version 1.0 <br/>Last updated 03/21/2021
                </div>
                <ul className={classes.linksContainer}>
                    <a href="https://github.com/ahmedhamad-okkio/" target="_blank">GITHUB</a>
                    <a href="https://www.linkedin.com/in/ahmedhamad-okkio/" target="_blank">LINKEDIN</a>
                    <a href="mailto:contactokkio@gmail.com"  target="_blank">MAIL</a>
                </ul>
            </div>
    </div>
    )

}
export default FinalPage;