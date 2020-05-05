
import React, {useState, useEffect} from 'react';



function Snake(props) {


    
    return(
        <div>
            {props.position.map((pos, index) => {
                const style = {
                    position:"absolute",
                    background:"red",
                    left: `${pos[0]}%`,
                    top: `${pos[1]}%`,
                    width: '2%',
                    height: '2%'
                }
            return (
                <div key = {index} className = "snakeDot" style = {style}></div>
            )}
            
            
            )}
            
        </div>
    )



}

export default Snake;