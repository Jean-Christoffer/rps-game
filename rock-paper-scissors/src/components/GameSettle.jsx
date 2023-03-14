import rocks from '/icon-rock.svg'
import papers from '/icon-paper.svg'
import scissorss from '/icon-scissors.svg'
import { motion } from "framer-motion"
import clsx from 'clsx';
export default function GameSettle(props){
    const {values, player,winner, compVal,playVal,reset} = props
    const classesPlayer = clsx(
        {
            'rock' : player === 'rock',
            'paper' : player === 'paper',
            'scissors' : player === 'scissors'
        }
        )
        const classesComputer = clsx(
            {
                'rock' : values === 'rock',
                'paper' : values === 'paper',
                'scissors' : values === 'scissors'
            }
        )
    return(
        <>
        <div
 
         className='settle'>
           <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
           className='player-container'>
            <p>Player choose {playVal} </p>
           <div className={classesPlayer}>
           <div className='img-container'>
           <img src={
                    player === 'rock' ? rocks :
                    player === 'paper' ? papers :
                    player === 'scissors' ? scissorss :
                    ''
                    } />
           </div> 
            </div>
            </motion.div>
            <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            >{winner === `${'Computer'}` ? winner + ' wins!' : winner === `${'Player'}` ? winner + ' wins!' : winner}</motion.h1>
            <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className='computer-container'>
            <p>Computer choose {compVal}</p>
                <div className={classesComputer}>
                    <div className='img-container'>
                    <img src={
                        values === 'rock' ? rocks :
                        values === 'paper' ? papers :
                        values === 'scissors' ? scissorss :
                        ''
                        } />
                    </div>  
                </div>
            </motion.div> 
        </div>
        <div className='btn-container'><button className='reset' onClick={reset}>Play again!</button></div>
        </>
    )
}

