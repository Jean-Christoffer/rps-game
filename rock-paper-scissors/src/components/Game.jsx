import rock from '/icon-rock.svg'
import paper from '/icon-paper.svg'
import scissors from '/icon-scissors.svg'
export default function Game(props){
    const {handlePlayerClick} = props

    return(
    <>
    <main>
        <div className='game-container'>
           <button value="rock" onClick={handlePlayerClick}  className='rock'>
            <div className='img-container'>
                 <img src={rock} value="rock"/>
            </div>  
            </button>
           <button value="paper" onClick={handlePlayerClick} className='paper'>
           <div className='img-container'>
            <img src={paper}/>
           </div> 
            </button>
           <button value="scissors" onClick={handlePlayerClick}  className='scissors'>
            <div className='img-container'><img src={scissors}/></div>
            </button>
    
        </div>
    </main>
    </>
    )
}