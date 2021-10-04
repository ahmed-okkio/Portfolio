import React from 'react';
import MainPage from '../Pages/MainPage/MainPage';
import classes from '../Pages/IntroPage/IntroPage.module.css';
import NavBar from '../Components/NavBar/NavBar';

const PageHandler = () =>
{
    var width = window.innerWidth;
    return(
        <>
            {width < 1300 
            ?<div className={classes.mainBody}>    
                <h1 className={classes.UnavialableText} >Sorry!</h1>
                <p className={classes.UnavialableText} style={{fontSize:`${5}vw`}}>My portfolio is not yet compatible with your screen size,
                 please try again on a desktop or laptop or contact me at contactokkio@gmail.com</p>
            </div>
            :   <>
                    <NavBar/> 
                    <MainPage/>
                </>
            }
        </>
    )
}
export default PageHandler;