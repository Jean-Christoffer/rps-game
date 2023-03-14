import React, {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import Game from './components/Game.jsx'
import GameSettle from './components/GameSettle.jsx'

function App() {
  const [playerValue, setPlayerValue] = useState('')
  const [computerValue, setComputerValue] = useState('')
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState('')
  const [computerScore, setComputerScore] = useState(0)
  const [gameSettle, setGameSettle] = useState(false)

  const values = ['rock','paper','scissors']

function computerChoice(){

  const randomIndex = Math.floor(Math.random() * values.length)

  if(randomIndex === 0){
    setComputerValue((prevState)=>{
      prevState = 'rock'
      return prevState
    })

  }
  if(randomIndex === 1){
    setComputerValue((prevState)=>{
      prevState = 'paper'
      return prevState
    })

  }
  if(randomIndex === 2){
    setComputerValue((prevState)=>{
      prevState = 'scissors'
      return prevState
    })

  }

}
useEffect(() => {
  if (playerValue !== '') {
    computerChoice();
  }
}, [playerValue]);

useEffect(()=>{
  if(computerValue !== ''){
    calculateWinner()
  }
},[computerValue])

  function calculateWinner(){
    if(playerValue === computerValue){
      setWinner((prevState)=>{
        prevState = 'Draw'
        return prevState
      })

    }
    else if(playerValue === 'rock' && computerValue ==='scissors'){
      setWinner((prevState)=>{
        prevState = 'Player'
        return prevState
      })
      setScore(prevCount => {
       prevCount +=1
       return prevCount
      })

    }else if(playerValue === 'paper' && computerValue ==='rock'){
      setWinner((prevState)=>{
        prevState = 'Player'
        return prevState
      })
      setScore(prevCount => {
         prevCount +=1
         return prevCount
        })

    }else if(playerValue === 'scissors' && computerValue ==='paper'){
      setWinner((prevState)=>{
        prevState = 'Player'
        return prevState
      })
      setScore(prevCount => {
         prevCount +=1
         return prevCount
        })

    }else{
      setWinner((prevState)=>{
        prevState = 'Computer'
        return prevState
      })
      setComputerScore((prevState)=>{
        prevState +=1
        return prevState
      })

    }
    setGameSettle(true)

  }

  function handlePlayerClick(event){
    setPlayerValue(event.currentTarget.value)
  }
  function reset(){
    setGameSettle(false)
    setPlayerValue('')
    setComputerValue('')
  }
  return (
    <>
    <Header score = {score} computerScore={computerScore}/>
    {gameSettle ? gameSettle && <GameSettle reset={reset} values={computerValue} player={playerValue} winner={winner} compVal={computerValue} playVal={playerValue}/>
     :
     <Game handlePlayerClick = {handlePlayerClick}  values={computerValue}  />}
    
    </>
  )
}

export default App
