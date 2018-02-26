const argv = require('yargs').argv

class Players {
  constructor(human) {
    this.human = human
  }

  makeComputerMoves() {
    return (arr => arr[Math.floor(Math.random() * 3)])(['rock', 'paper', 'scissors'])
  }
}

class Roshambo extends Players {
  constructor(human, computer) {
    super(human)
    this.computer = super.makeComputerMoves()
    this.winner = 'No one'
  }

  play() {
    if (this.human === this.computer) {
      return this.winner
    } else if ((this.human === 'rock') && (this.computer === 'scissors')) {
      this.winner = 'Human'
    } else if ((this.human === 'scissors') && (this.computer === 'paper')) {
      this.winner = 'Human'
    } else if ((this.human === 'paper') && (this.computer === 'rock')) {
      this.winner = 'Human'
    } else {
      this.winner = 'Computer'
    }

    return this.winner
  }

  print() {
    const logArr = [`Playing a game of Roshambo against the computer.`, `Player plays ${this.human}!`, `Computer plays ${this.computer}!`, `~${this.winner} wins.~`]

    logArr.forEach(line => console.log(line))
  }
}

const game = new Roshambo(argv.move)
game.play()
game.print()