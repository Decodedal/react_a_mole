import React, {useEffect} from "react";
import HillImg from "../assets/molehill.png";


function Hill(props){

    useEffect(()=>{
        let random = Math.floor(Math.random() * 5000)
        let timer = setTimeout(()=>{
            props.changeDisplay(true)
        },1000)
        return() => clearTimeout(timer)
    })

    return(
        <img src= {HillImg} alt="hill"/>
    )
}

export default Hill