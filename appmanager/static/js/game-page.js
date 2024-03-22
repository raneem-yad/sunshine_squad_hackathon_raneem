document.addEventListener("DOMContentLoaded", () =>{
    const gameCells = document.getElementsByClassName("game-cell")
    let usersTurn = true;
    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    for (let cell of gameCells){
        cell.addEventListener("click", () => {
            cell.style.color = usersTurn ? ('green'):('blue')
            cell.childNodes[0].classList.add(
                `fa-face-${usersTurn ? ('smile'):('frown-open')}`
            )
            let col = cell.id.substring(0, 1)
            let row = cell.id.substring(2, 3)
            gameBoard[col][row] = usersTurn ? (1):(-1)
            console.log(gameBoard)
            usersTurn = !usersTurn
        })
    }
})