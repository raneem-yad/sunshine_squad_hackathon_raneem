document.addEventListener("DOMContentLoaded", () =>{
    // Declare const variables
    const gameCells = document.getElementsByClassName("game-cell")
    const gameTable = document.getElementById('game-table')
    const message = document.getElementById('message')
    const score = document.getElementById('score')
    const newGameBtn = document.getElementById('new-game')

    // Taken from https://alvarotrigo.com/blog/wait-1-second-javascript/
    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    // Function to detect win based on game board and last played position
    const detectWin = (row, col) => {
        // check col
        let colSum = 0;
        for (let i=0;i<3;i++){
            colSum += gameBoard[i][col]
        }
        if (colSum === 3){
            return 'user-win'
        } else if (colSum === -3){
            return 'comp-win'
        }
        // check row
        let rowSum = 0;
        for (let i=0;i<3;i++){
            rowSum += gameBoard[row][i]
        }
        if (rowSum === 3){
            return 'user-win'
        } else if (rowSum === -3){
            return 'comp-win'
        }
        // check main diagonal
        if (row === col){
            let diagSum = 0;
            for (let i=0;i<3;i++){
                diagSum += gameBoard[i][i]
            }
            if (diagSum === 3){
                return 'user-win'
            } else if (diagSum === -3){
                return 'comp-win'
            }
        }
        // check off diagonal
        if (row + col === 2){
            let offDiagSum = 0;
            for (let i=0;i<3;i++){
                offDiagSum += gameBoard[2-i][i]
            }
            if (offDiagSum === 3){
                return 'user-win'
            } else if (offDiagSum === -3){
                return 'comp-win'
            }
        }
        return 'no-win'
    }

    // Declare variables required for game play
    let usersTurn = true;
    let count = 0;
    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    let gameRunning = true

    // Add event listener to new game button
    newGameBtn.addEventListener("click", () => {
        // Reset gameboard
        gameBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        // Hide all emojis from cells
        for (let cell of gameCells){
            cell.classList.remove('disabled')
            cell.childNodes[0].classList.remove(`fa-face-smile`)
            cell.childNodes[0].classList.remove(`fa-face-frown-open`)
            cell.style.color = 'white'
        }
        // Re-disable new game button
        newGameBtn.disabled = true
        message.innerText = ''
        count = 0
        gameRunning = true
        usersTurn = true
        gameTable.classList.remove('hidden')
    })

    // Add event listener to each square
    for (let cell of gameCells){
        cell.addEventListener("click", async () => {
            // Only let user click if cell empty
            if (!cell.classList.contains('disabled') && gameRunning && usersTurn){
                // Make emoji appear
                cell.style.color = 'green'
                cell.classList.add('disabled')
                cell.childNodes[0].classList.add('fa-face-smile')
                // Get last played cell and check for win
                let row = parseInt(cell.id.substring(0, 1))
                let col = parseInt(cell.id.substring(2, 3))
                gameBoard[row][col] = 1
                count++
                let feedback = detectWin(row, col)
                usersTurn=false
                // Check is user has won
                if (feedback === 'user-win'){
                    message.innerText = ('Well Done! You won')
                    // Increment score if user has won
                    score.innerText = parseInt(score.innerText) + 1
                    newGameBtn.disabled = false
                    gameRunning = false
                // Game is a draw
                } else if (count === 9){
                    message.innerText = 'Draw'
                    newGameBtn.disabled = false
                    gameRunning = false
                // Game still in progress
                } else {
                    message.innerText = 'Computer is thinking...'
                    await(delay(1000))
                    // It is now computers turn
                    let compRow = Math.floor(Math.random() * 3);
                    let compCol = Math.floor(Math.random() * 3);
                    // If square already taken find another
                    while (gameBoard[compRow][compCol] != 0){
                        compRow = Math.floor(Math.random() * 3);
                        compCol = Math.floor(Math.random() * 3);
                    }
                    gameBoard[compRow][compCol] = -1
                    count++
                    let chosenCell = document.getElementById(`${compRow}-${compCol}`)
                    chosenCell.style.color = 'blue'
                    chosenCell.classList.add('disabled')
                    chosenCell.childNodes[0].classList.add('fa-face-frown-open')
                    // Check if computer has won
                    if (detectWin(compRow, compCol) === 'comp-win'){
                        message.innerText = ('Sorry, computer won. Press new game button to try again.')
                    } else if (count === 9){
                        message.innerText = 'Draw'
                        newGameBtn.disabled = false
                        gameRunning = false
                    } else {
                        usersTurn = true
                        message.innerText = ''
                    }
                }
            }
        })
    }
})