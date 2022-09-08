import React, { useEffect } from "react";
import MoleImg from "../assets/mole.png";
import HillImg from "../assets/molehill.png";


function Mole(props){

    useEffect(()=>{
        let random = Math.floor(Math.random() * 3000)
        let timer = setTimeout(()=>{
            props.changeDisplay(false)
            console.log('this is working')
        },random)
        return() => clearTimeout(timer)
    })

    return(
        <img src= {MoleImg} alt="mole"
        onClick={props.handleClick}
        />
    )
}

export default Mole