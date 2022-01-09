import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import PageHandler from './PageHandler/PageHandler'
import NavBar from './Components/NavBar/NavBar';
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { HashRouter} from 'react-router-dom'

function App() {
  var Width = window.innerWidth;
  const [style,setStyle] = useState({opacity:0,transition:'5s ease'});

  const particlesInit = (main) => {
    loadStarsPreset(main)
  };
  const options = {
    background: {
      color: {
        value: "#040c14"
      }
    },
    preset: "stars",
    particles:{
      opacity:{
        value:0.5
      }
    }
  } 


  useEffect(()=>{
    setStyle({opacity:0.5,transition:'5s ease'})

  },[]); 
  return (
    <div className={classes.App} >
      {Width < 360 
            ?<div className={classes.mainBody}>    
                <h1 className={classes.UnavialableText} >Sorry!</h1>
                <p className={classes.UnavialableText} style={{fontSize:`${5}vw`}}>My portfolio is not compatible with your screen size,
                 please try again on a larger device or contact me at contactokkio@gmail.com</p>
            </div>
            :
            <>
            <HashRouter >
              <NavBar/> 
              <PageHandler></PageHandler>
            </HashRouter>
        </>
    }
    <Particles id="tsparticles"  style={style} className={classes.floatStars}  options={options} init={particlesInit} />
    </div>
  );
}

export default App;
