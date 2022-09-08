import React, {useState} from "react";
import Mole from "./mole";
import Hill from "./hill";
  

function MoleContainer(props){
    let [displayMole, changeDisplay] = useState(true)

    function handleClick(e){
        props.setScore(props.score + 1)
        changeDisplay(false)
    }

    let MoleOrHill = displayMole ? <Mole setScore = {props.setScore} changeDisplay ={changeDisplay} handleClick = {handleClick}/> : <Hill changeDisplay ={changeDisplay}/>

   return(
    <div>
        {MoleOrHill}
    </div>
   )
}

export default MoleContainer;