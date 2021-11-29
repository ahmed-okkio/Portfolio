import React from 'react';
import MainPage from '../Pages/MainPage/MainPage';
import WokeAndShoot from '../Pages/DetailedPages/WokeAndShoot/WokeAndShoot'


const PageHandler = () =>
{
    
    let Page = 'MainPage';
    switch (Page) {
        case 'MainPage':
            return  <MainPage/>;
        case 'WokeAndShoot':
            return <WokeAndShoot />;
        default:
            return<></>;
    }
}
export default PageHandler;