import React from 'react';
import classes from './FinalPage.module.css';



const Footer = (props) => {
    return(
        <div className={classes.Footer}>
            <div className={classes.UpperFooter}>
                <div className={classes.Credits}>
                    <div className={classes.whiteBar}></div>
                    
                    <div>
                        DESIGNED& <br/>DEVELOPED BY <br/> <div className={classes.Name}>AHMED HAMAD <br/>2021</div>
                    </div>
                </div>
                <ul className={classes.linksContainer}>
                    <a href="https://github.com/ahmedhamad-okkio/" target="_blank" rel="noreferrer">GITHUB</a>
                    <a href="https://www.linkedin.com/in/ahmedhamad-okkio/" target="_blank" rel="noreferrer">LINKEDIN</a>
                    <a href="mailto:contactokkio@gmail.com"  target="_blank" rel="noreferrer">MAIL</a>
                </ul>
            </div>
            <div className={classes.Version}>
                <br/>Last updated 28/01/2022
            </div>
        </div>
    )

}
export default Footer;