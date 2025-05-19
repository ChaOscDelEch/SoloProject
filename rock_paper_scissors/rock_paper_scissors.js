const args = process.argv.slice(2)
const move = args[0]?.toLowerCase()

const validMoves = ['rock', 'paper', 'scissors']

if (!validMoves.includes(move)) {
  console.log("Please select 'rock', 'paper' or 'scissors'.")
  process.exit(1)
}


const randomIndex = Math.floor(Math.random() * validMoves.length)
const computerMove = validMoves[randomIndex]

console.log(`Your selection : ${move}`)
console.log(`Computer selected : ${computerMove}`)

if (move === computerMove) {
  console.log("Draw !")
} else if (
  (move === 'rock' && computerMove === 'scissors') ||
  (move === 'paper' && computerMove === 'rock') ||
  (move === 'scissors' && computerMove === 'paper')
) {
  console.log("You won !")
} else {
  console.log("You lost !")
}
