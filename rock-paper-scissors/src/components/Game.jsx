import rocks from '/icon-rock.svg'
import papers from '/icon-paper.svg'
import scissorss from '/icon-scissors.svg'
import { motion } from "framer-motion"

export default function Game(props){
    const {handlePlayerClick, disabled, values} = props

    return(
    <>
    <main>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         className='game-container'>
           <button  disabled={disabled} value="rock" onClick={handlePlayerClick}  className={`rock` }>
            <div className='img-container'>
                 <img src={rocks} value="rock"/>
            </div>  
            </button>
           <button disabled={disabled}  value="paper" onClick={handlePlayerClick}  className={`paper` }>
           <div className='img-container'>
            <img src={papers}/>
           </div> 
            </button>
           <button  disabled={disabled}  value="scissors" onClick={handlePlayerClick} className={`scissors` }>
            <div className='img-container'><img src={scissorss}/></div>
            </button>
    
        </motion.div>
    </main>
    </>
    )
}