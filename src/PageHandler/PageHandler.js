import React, {useState, useEffect} from 'react';
import MainPage from '../Pages/MainPage/MainPage';
import WokeAndShoot from '../Pages/DetailedPages/WokeAndShoot/WokeAndShoot'
import {Route, Routes} from 'react-router-dom'


const PageHandler = () =>
{
    const [scrollOffset, setScrollOffset] = useState(0);
    const handleScroll = () => setScrollOffset(window.pageYOffset);
    const getScrollOffset = () =>{
        console.log(scrollOffset);
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
    
    // let Page = 'WokeAndShoot';
    // switch (Page) {
    //     case 'MainPage':
    //         return  <MainPage/>;
    //     case 'WokeAndShoot':
    //         return <WokeAndShoot />;
    //     default:
    //         return<></>;
    // }
    return(
        <Routes>
            <Route exact path="/" element={<MainPage scrollOffset = {scrollOffset}/>}/>
            <Route exact path="/Home" element={<MainPage scrollOffset = {scrollOffset}/>}/>
            <Route exact path="/WOKEN" element={<WokeAndShoot scrollOffset = {scrollOffset}/>}/>
        </Routes>
    )
}
export default PageHandler;