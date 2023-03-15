export default function computerChoice(choices, setValue){
        const randomIndex = Math.floor(Math.random() * choices.length)
      
        if(randomIndex === 0){
            setValue((prevState)=>{
            prevState = 'rock'
            return prevState
          })
      
        }
        if(randomIndex === 1){
            setValue((prevState)=>{
            prevState = 'paper'
            return prevState
          })
      
        }
        if(randomIndex === 2){
            setValue((prevState)=>{
            prevState = 'scissors'
            return prevState
          })
      
        }
}