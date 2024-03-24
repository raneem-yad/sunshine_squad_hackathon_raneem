document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("game-card");
    let cardsSelected = []
    const foundItems = []

    // Taken from https://alvarotrigo.com/blog/wait-1-second-javascript/
    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    for (let card of cards){
        card.addEventListener("click", async () => {
            if (cardsSelected.length < 2){
                let innerIcon = card.childNodes[0]
                innerIcon.classList.remove("fa-question")
                let iconId = innerIcon.id
                innerIcon.classList.add(iconId.slice(0, -2))
                cardsSelected.push(iconId)
                if (cardsSelected.length === 2){
                    if (cardsSelected[0].slice(0, -2) === cardsSelected[1].slice(0, -2)){
                        document.getElementById(iconId.slice(0, -2)).classList.remove('not-found')
                        cardsSelected = []
                    } else {
                        await(delay(2000))
                        for (let c of cardsSelected){
                            document.getElementById(c).classList.remove(c.slice(0, -2))
                            document.getElementById(c).classList.add('fa-question')
                            cardsSelected = []
                        }
                    }
                }
            }
        })
    }
})