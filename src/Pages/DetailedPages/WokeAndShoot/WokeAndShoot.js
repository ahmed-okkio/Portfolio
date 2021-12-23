import React from 'react';
import TitleDescription from '../ProjectDetailsComponents/TitleDescriptionComponent';

const WokeAndShoot=(props)=>{
    let titleText = 'WOKEN'
    var Desc = [`Woken is an online multiplayer fast paced FPS game built
     on Unreal Engine 4 primarily in C++ with the assistance of blueprints.
     This is my largest continuing project allowing me to take on challenging 
     concepts such as networking custom player movement, movement prediction,
     roll back validatation and production experiences like testing, shipping and patching.` ,<br/>,<br/>, 
     `The game has already met its initial project scope, but still recieves intermittent patching.`]
    var link2 = "https://github.com/ahmedhamad-okkio/WokeAndShoot"

    return(
        <>
        <TitleDescription titleTextProp = {titleText} Description = {Desc}/>
        </>
    )

}
export default WokeAndShoot;