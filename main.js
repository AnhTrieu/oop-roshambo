const argv = require('yargs').argv
const moves = ['rock', 'paper', 'scissors']
const humanMove = argv.move
// const computerPick =
const computerMove = (arr => {
  return arr[Math.floor(Math.random() * 3)]
})(moves)

const play = (human, computer) => {
  if ((human === 'rock') && (computer === 'scissors')) {
    return 'Human'
  } else if ((human === 'scissors') && (computer === 'paper')) {
    return 'Human'
  } else if ((human === 'paper') && (computer === 'rock')) {
    return 'Human'
  } else {
    return 'Computer'
  }
}

const winner = (() => {
  if (humanMove === computerMove) {
    return 'No one'
  } else {
    return play(humanMove, computerMove)
  }
})()

console.log(`Playing a game of Roshambo against the computer.`)
console.log(`Player plays ${humanMove}!`)
console.log(`Computer plays ${computerMove}!`)
console.log(`~${winner} wins.~`)