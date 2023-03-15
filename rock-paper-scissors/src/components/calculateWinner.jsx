export default function calculateWinner(setWinner,setScore, setComputerScore,player,computer,settle){
    if(player === computer){
        setWinner((prevState)=>{
          prevState = 'Draw'
          return prevState
        })
  
      }
      else if(player === 'rock' && computer ==='scissors'){
        setWinner((prevState)=>{
          prevState = 'Player'
          return prevState
        })
        setScore(prevCount => {
         prevCount +=1
         return prevCount
        })
  
      }else if(player === 'paper' && computer ==='rock'){
        setWinner((prevState)=>{
          prevState = 'Player'
          return prevState
        })
        setScore(prevCount => {
           prevCount +=1
           return prevCount
          })
  
      }else if(player === 'scissors' && computer ==='paper'){
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
      settle(true)
}