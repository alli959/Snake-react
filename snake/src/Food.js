import React, {useState, useEffect} from 'react';
import {withRouter } from 'react-router-dom'


function Food(props) {

    const left = props.left; 
    const top = props.top; 
    const style = {
        position:"absolute",
        background:"blue",
        left: `${left}%`,
        top: `${top}%`,
        width: '2%',
        height: '2%'
    }

return(
    <div>
        <div className = "Food" style = {style}></div>
    </div>
)



}

export default withRouter(Food);