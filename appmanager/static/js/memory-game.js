document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("game-card");
    for (let card of cards){
        card.addEventListener("click", () => {
            card.childNodes[0].classList.remove("fa-question")
            card.childNodes[0].classList.add(card.childNodes[0].id)
        })
    }
})