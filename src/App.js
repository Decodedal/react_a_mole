import logo from './logo.svg';
import './App.css';
import MoleContainer from './MoleContainer';
import React, {useState} from 'react';

function App() {

    let [score, setScore] = useState(0)

    const createMoleHill = () =>{
      let hills = [];
      for (let i = 0; i < 9; i++){
        hills.push(
          <MoleContainer key={i}
          setScore = {setScore}
          score = {score}/>
        )
      }
      return(
        <div className='hill-container'>
          {hills}
        </div>
      )
    }

return(
  <div className='App'>
  {score}
  {createMoleHill()}
  </div>

)
}

export default App;
