import rock from '/icon-rock.svg'
import paper from '/icon-paper.svg'
import scissors from '/icon-scissors.svg'
export default function Game(props){

    return(
    <>
    <main>
        <div className='game-container'>
           <button className='rock'><img src={rock}/></button>
           <button className='paper'><img src={paper}/></button>
           <button className='scissors'><img src={scissors}/></button>
    
        </div>
    </main>
    </>
    )
}