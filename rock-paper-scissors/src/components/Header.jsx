export default function Header(props){
    const {score} = props
    return(
        <>
            <header>
                <div>
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>

                <div className="score-container">
                    <h2 className="score-title">SCORE</h2>
                    <p className="score">{score}</p>
                </div>
            </header>
        </>
    )
}