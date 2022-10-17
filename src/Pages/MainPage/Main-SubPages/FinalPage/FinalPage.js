import React, {useState,useEffect} from 'react';
import classes from './FinalPage.module.css';
import Bonfire from '../../../../Assets/Bonfire.mp4';
import Overlay from '../../../../Assets/VignetteOverlay.png';
import Footer from './Footer';



const FinalPage = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    const [loadStyle1,setLoadStyle1] = useState({opacity:0});
    const [loadStyle2,setLoadStyle2] = useState({opacity:0});
    const [onTransitionEndStyle,setOnTransitionEndStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    

    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("Greetings")
        if ( typeof  node != 'undefined')
        {
            
            if (node.getBoundingClientRect().top < 1000 && loadStyle.opacity == 0)
            {
                setLoadStyle({transform: `translateX(${0}px)`});
                setOnTransitionEndStyle({transform: `translateX(${0}px)`});
                setLoadStyle1({});
                setLoadStyle2({transform: `translateX(${0}px)`});
            }
        }
    }
    const onTransitionEndUpdateStyle = () =>{
        setOnTransitionEndStyle({transition: `background-position ${275}ms ease`})
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
            <div className={classes.FinalText}>
                <div className={classes.Warning} style={loadStyle2}>The road ahead is filled with many problems...</div>
                <div className={classes.Warning2} style={loadStyle2}>...Get the right person to help solve them.</div>
                <a  href="mailto:contactokkio@gmail.com"  target="_blank" rel="noreferrer" onTransitionEnd={onTransitionEndUpdateStyle} style={onTransitionEndStyle}className={classes.contactMail}>contactokkio@gmail.com</a>
            </div>
            <Footer></Footer>
    </div>
    )

}
export default FinalPage;