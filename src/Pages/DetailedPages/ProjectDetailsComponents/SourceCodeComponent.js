import React, {useState} from 'react';
import classes from './ProjectDetails.module.css'
import { CodeBlock, dracula} from "react-code-blocks"
import CustomCollapsible from './CustomCollapsible'
import './Collapsible.css';
import DoubleArrow from '../../../Logos/DoubleArrow.svg'

const SourceCodeComponent=(props)=>{

    return(     
    <div className={classes.SourceCode}>
        <CodeBlock
            text={props.sourceCode}
            language={props.language}
            showLineNumbers={true}
            theme = {dracula}
        />
    </div>)
}
export default SourceCodeComponent;