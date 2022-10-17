import React, {useState} from 'react'
import Collapsible from 'react-collapsible'
import classes from './ProjectDetails.module.css'
import './Collapsible.css';
import DoubleArrow from '../../../Logos/DoubleArrow.svg'

const CustomCollapsible=(props)=>{
    const [Style, setStyle] = useState(props.isOpen? {transform: `rotate(${0}deg)`} : {});
    let triggerElement = <div className={classes.triggerContainer}>
        <img className={classes.DoubleArrow} style={Style} src={DoubleArrow}/>
        <div className={classes.sourceCodeTitle}>{props.title}</div>
    </div>
    const onOpen = () =>{
        setStyle({transform: `rotate(${0}deg)`})
    }
    const onClose = () =>{
        setStyle({})
    }
    return(
            <Collapsible open={props.isOpen} trigger={triggerElement} onOpen={onOpen} onClose={onClose}>
                {props.children}
            </Collapsible>
            )
}
export default CustomCollapsible;