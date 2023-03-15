import rock from '/icon-rock.svg'
import paper from '/icon-paper.svg'
import scissors from '/icon-scissors.svg'
import { motion } from "framer-motion"
import Div from './Div.jsx'
export default function GameSettle(props){
    const {computerChoice, playerChoice,winner, reset} = props

    return(
        <>
        <div
 
         className='settle'>
           <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
           className='player-container'>
            <p>Player choose {playerChoice} </p>
           <Div classes = {playerChoice}>
           <div className='img-container'>
           <img src={
                    playerChoice === 'rock' ? rock :
                    playerChoice === 'paper' ? paper :
                    playerChoice === 'scissors' ? scissors :
                    ''
                    } />
           </div> 
            </Div>
            </motion.div>
            <motion.h1 className='winner'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            >{winner === `${'Computer'}` ? winner + ' wins!' : winner === `${'Player'}` ? winner + ' wins!' : winner}</motion.h1>
            <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className='computer-container'>
            <p>Computer choose {computerChoice}</p>
                <Div classes = {computerChoice}>
                    <div className='img-container'>
                    <img src={
                        computerChoice === 'rock' ? rock :
                        computerChoice === 'paper' ? paper :
                        computerChoice === 'scissors' ? scissors :
                        ''
                        } />
                    </div>  
                </Div>
            </motion.div>
             
        </div>
        <div className='btn-container'><button className='reset' onClick={reset}>Play again!</button></div>
        </>
    )
}

