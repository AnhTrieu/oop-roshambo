const argv = require('yargs').argv
const humanMove = argv.move
const computerMove = (arr => {
  return arr[Math.floor(Math.random() * 3)]
})(['rock', 'paper', 'scissors'])

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

const logArr = [`Playing a game of Roshambo against the computer.`, `Player plays ${humanMove}!`, `Computer plays ${computerMove}!`, `~${winner} wins.~`]

logArr.forEach(line => console.log(line))