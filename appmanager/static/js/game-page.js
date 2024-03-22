document.addEventListener("DOMContentLoaded", () =>{
    // Declare const variables
    const gameCells = document.getElementsByClassName("game-cell")
    const message = document.getElementById('message')
    const score = document.getElementById('score')
    const newGameBtn = document.getElementById('new-game')

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
        count = 0
    })

    // Add event listener to each square
    for (let cell of gameCells){
        cell.addEventListener("click", () => {
            // Only let user click if cell empty
            if (!cell.classList.contains('disabled')){
                // Make emoji appear
                cell.style.color = usersTurn ? ('green'):('blue')
                cell.classList.add('disabled')
                cell.childNodes[0].classList.add(
                    `fa-face-${usersTurn ? ('smile'):('frown-open')}`
                )
                // Get last played cell and check for win
                let row = parseInt(cell.id.substring(0, 1))
                let col = parseInt(cell.id.substring(2, 3))
                gameBoard[row][col] = usersTurn ? (1):(-1)
                count++
                let feedback = detectWin(row, col)
                if (feedback === 'comp-win' || feedback === 'user-win'){
                    message.innerText = feedback
                    // Increment score if user has won
                    if (feedback === 'user-win'){
                        score.innerText = parseInt(score.innerText) + 1
                    }
                    newGameBtn.disabled = false
                } else if (count === 9){
                    message.innerText = 'Draw'
                    newGameBtn.disabled = false
                }
                usersTurn = !usersTurn
            }
        })
    }
})