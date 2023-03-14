export default function Header(props){
    const {score,computerScore} = props
    return(
        <>
            <header>
                <div>
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>


                <div className="score-container">
                    <h2 className="score-title">COMPUTER SCORE</h2>
                    <p className="score">{computerScore}</p>
                </div>
                <div className="score-container">
                    <h2 className="score-title">PLAYER SCORE</h2>
                    <p className="score">{score}</p>
                </div>
            </header>
        </>
    )
}