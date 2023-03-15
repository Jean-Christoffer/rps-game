import React, {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import Game from './components/Game.jsx'
import GameSettle from './components/GameSettle.jsx'
import computerChoice from './components/computerChoice.jsx'
import calculateWinner from './components/calculateWinner.jsx'
function App() {
  const [playerValue, setPlayerValue] = useState('')
  const [computerValue, setComputerValue] = useState('')
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState('')
  const [computerScore, setComputerScore] = useState(0)
  const [gameSettle, setGameSettle] = useState(false)

  const choices = ['rock','paper','scissors']

  useEffect(() => {
    if (playerValue !== '') {
      computerChoice(choices, setComputerValue);
    }
  }, [playerValue]);

  useEffect(()=>{
    if(computerValue !== ''){
      calculateWinner(setWinner,setScore,setComputerScore,playerValue,computerValue,setGameSettle)
    }
  },[computerValue])

  
  function reset(){
    setGameSettle(false)
    setPlayerValue('')
    setComputerValue('')
  }
  return (
    <>
    <Header score = {score} computerScore={computerScore}/>
    {gameSettle ? gameSettle && <GameSettle reset={reset} computerChoice={computerValue} playerChoice={playerValue} winner={winner}/>
     :
     <Game setChoice={setPlayerValue}  />}
    
    </>
  )
}

export default App
