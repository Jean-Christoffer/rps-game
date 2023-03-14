import React, {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import Game from './components/Game.jsx'

function App() {
  const [playerValue, setPlayerValue] = useState('')
  const [computerValue, setComputerValue] = useState('')
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState('')

  useEffect(()=>{
    const values = ['rock','paper','scissors']
    const randomIndex = Math.floor(Math.random()* values.length)

    if(randomIndex === 0){
      setComputerValue('rock')
    }
    if(randomIndex === 1){
      setComputerValue('paper')
    }
    if(randomIndex === 2){
      setComputerValue('scissors')
    }
    calculateWinner()
    reset()
    
  },[playerValue])

  function reset(){
    setPlayerValue('')
  }

  function calculateWinner(){
    if(playerValue === computerValue){
      setWinner('Draw')
    }
    else if(playerValue === 'rock' && computerValue ==='scissors'){
      setWinner('Player')
      setScore(prevCount => {
       prevCount +=1
       return prevCount
      })
    }else if(playerValue === 'paper' && computerValue ==='rock'){
      setWinner('Player')
      setScore(prevCount => {
         prevCount +=1
         return prevCount
        })
    }else if(playerValue === 'scissors' && computerValue ==='paper'){
      setWinner('Player')
      setScore(prevCount => {
         prevCount +=1
         return prevCount
        })
    }
    setWinner('Computer')
  }

  function handlePlayerClick(event){
    setPlayerValue(event.currentTarget.value)
  }

  return (
    <>
    <Header score = {score}/>
    <Game handlePlayerClick = {handlePlayerClick}/>
    </>
  )
}

export default App
