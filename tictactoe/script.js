var game = {
    newBoard:     [[null, null, null],
                   [null, null, null],
                   [null, null, null]],
    currentBoard: [[null, null, null],
                   [null, null, null],
                   [null, null, null]],
    winningLines: [ [[0, 0],[0, 1],[0, 2]],
                    [[1, 0],[1, 1],[1, 2]],
                    [[2, 0],[2, 1],[2, 2]],
                    [[0, 0],[1, 0],[2, 0]],
                    [[0, 1],[1, 1],[2, 1]],
                    [[0, 2],[1, 2],[2, 2]],
                    [[0, 0],[1, 1],[2, 2]],
                    [[0, 2],[1, 1],[2, 0]]],
    winningMove: function(player) {
                     var winningMove = null;
                        this.winningLines.forEach(function(line) {
                            var playerMarkedSquares = 0;
                            var potentialWinningMove = null;

                            line.forEach(function(pos) {
                                if (this.currentBoard[pos[0]][pos[1]] == player) {
                                    playerMarkedSquares++;
                                } else {
                                    potentialWinningMove = pos;
                                }
                            }, this);
                            if (playerMarkedSquares == 2) { winningMove = potentialWinningMove; }
                          }, this);
                      return winningMove;
                  },
    winner: function() {
                var winner = false;
                this.winningLines.forEach(function(line) {
                    var xMarkedSquares = 0;
                    var oMarkedSquares = 0;

                    line.forEach(function(pos) {
                        if (this.currentBoard[pos[0]][pos[1]] == 'x') {
                            xMarkedSquares++;
                        }
                        if (this.currentBoard[pos[0]][pos[1]] == 'o') {
                            oMarkedSquares++;
                        }
                    }, this);
                    if (xMarkedSquares === 3 || oMarkedSquares === 3) {
                        winner = true;
                    }
                }, this);
                return winner;
            }
}

var cpu = {
    makeMove: function() {
                  var move = game.winningMove('x');
                  while (!move) {
                    for (var i in game.currentBoard) {
                        for (var j in game.currentBoard[i]) {
                            if (!game.currentBoard[i][j]) { move = [i, j]; }
                        }
                    }
                  }
                  game.currentBoard[move[0]][move[1]] = 'x';
                  view.displayBoard();
              }
}

var user = {
    makeMove: function(row, col) {
                  game.currentBoard[row][col] = 'o';
                  view.displayBoard();
              }
}

var view = {
    displayBoard: function() {
                      console.log(game.currentBoard);
                      if (game.winner == true) {
                          console.log('Game over');
                      }
                  }
}
