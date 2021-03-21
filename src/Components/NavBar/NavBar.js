import React from 'react';
import classes from './NavBar.module.css';
import Github from '../../Logos/Github.svg';
import Linkedin from '../../Logos/Linkedin.svg';
import Mail from '../../Logos/Mail.svg';


const NavBar = () =>
{
    return(
        <>
            <div className={classes.navBarCollider}></div>

            <div className={classes.navBody}>
                <div className={classes.displayName}>
                    <ul className={classes.nameContainer}>
                        <li className={classes.firstName}>AHMED</li>
                        <li className={classes.lastName}>HAMAD</li>
                    </ul>
                </div>

                <div className={classes.links}>
                    <ul className={classes.linksContainer}>
                        <a href="https://github.com/ahmedhamad-okkio/" target="_blank"><img src={Github} className={classes.githubLogo}/></a>
                        <a href="https://www.linkedin.com/in/ahmedhamad-okkio/" target="_blank"><img src={Linkedin} className={classes.linkedinLogo}/></a>
                        <a href="mailto:contactokkio@gmail.com"  target="_blank"><img src={Mail} className={classes.mailLogo}/></a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavBar;