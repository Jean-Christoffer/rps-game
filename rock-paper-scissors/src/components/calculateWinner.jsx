export default function calculateWinner(setWinner, setScore, setComputerScore, player, computer, settle) {
  const winners = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (player === computer) {
    setWinner('Draw');
  } else if (winners[player] === computer) {
    setWinner('Player');
    setScore(prevCount => prevCount + 1);
  } else {
    setWinner('Computer');
    setComputerScore(prevCount => prevCount + 1);
  }

  settle(true);
}