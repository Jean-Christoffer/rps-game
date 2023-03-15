import rock from '/icon-rock.svg'
import paper from '/icon-paper.svg'
import scissors from '/icon-scissors.svg'
import { motion } from "framer-motion"

export default function Game(props){
    const {setChoice} = props

    return(
    <>
    <main>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         className='game-container'>
           <button  value="rock" onClick={(event)=> setChoice(event.currentTarget.value)}  className={`rock`}>
            <div className='img-container'>
                 <img src={rock} value="rock"/>
            </div>  
            </button>
           <button  value="paper" onClick={(event)=> setChoice(event.currentTarget.value)}   className={`paper`}>
           <div className='img-container'>
            <img src={paper}/>
           </div> 
            </button>
           <button  value="scissors" onClick={(event)=> setChoice(event.currentTarget.value)}  className={`scissors`}>
            <div className='img-container'><img src={scissors}/></div>
            </button>
    
        </motion.div>
    </main>
    </>
    )
}