import React, {useEffect,useState} from 'react';
import classes from './BackgroundPage.module.css';



const BackgroundPage = (props) => {
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});

    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        var node = document.getElementById("BackgroundHeader")
        if ( typeof  node != 'undefined')
        {
            
            if (props.scrollOffset >= (node.offsetTop) && loadStyle.opacity == 0)
            {
                setLoadStyle({opacity:1})
            }
        }
    }
    useEffect(()=>{
       LoadComponent();
    },[props.scrollOffset])
    return(
        <div className={classes.BackgroundContainer} style={loadStyle}>
            <div id="BackgroundHeader" className={classes.BackgroundHeader} style={loadStyle}>
                BACKGROUND
            </div>
            <div className={classes.Background} style={loadStyle}>
                My name is Ahmed Hamad and I'm a computer science student, competitive gamer and junior game developer.
                Currently learning new skills and mastering my craft by exploring and studying leading industry games and creating my own.
                I'm actively looking for opportunities in the gaming industry to kick start my career, 
                 gain valuable professional experience and to work with fantastic like minded people.
                I love technology and understanding how things work which has me always tinkering with new concepts and ideas.
                I look to always create quality creations by setting high standards and aiming to match or exceed them.
                I'm specifically working on gameplay programming and solving the problems the stand in the face of fun and creativity.
                By recreating some of the most popular and fun gameplay mechanics from scratch, I look to understand and cement my experience in this part of the industry.
                I am also a huge fan of the esports world because it combines teamwork and individual skill with video games. I enjoy competing
                in online and local tournaments as well as hosting and managing tournaments for various online and local communities.
                <br/>
                <br/>
                I'm open and interested in working in all aspects of game development, if you feel like I may be a fit for any roles do not hesitate to contact me.
                <br/><br/> Thanks for reading and enjoy the rest of my portflio.

            </div>
        </div>
    )
}
export default BackgroundPage   


