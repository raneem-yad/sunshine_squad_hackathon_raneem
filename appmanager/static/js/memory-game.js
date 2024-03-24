document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("game-card");
    let cardsSelected = []
    const foundItemsScore = document.getElementById('found-items-score')
    const prompt = document.getElementById('prompt')
    const counter = document.getElementById('counter')

    // Taken from https://alvarotrigo.com/blog/wait-1-second-javascript/
    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    // Add event listener to all cards
    for (let card of cards){
        let innerIcon = card.childNodes[0]
        innerIcon.addEventListener("click", async () => {
            if (cardsSelected.length === 0 || cardsSelected.length === 1 && cardsSelected[0] != innerIcon.id){
                // Turn cards over
                innerIcon.classList.remove("fa-question")
                innerIcon.style.backgroundColor = 'white'
                let iconId = innerIcon.id
                innerIcon.classList.add(iconId.slice(0, -2))
                cardsSelected.push(iconId)
                if (cardsSelected.length === 2){
                    // If cards selected match
                    if (cardsSelected[0].slice(0, -2) === cardsSelected[1].slice(0, -2) && cardsSelected[0] != cardsSelected[1]){
                        document.getElementById(iconId.slice(0, -2)).classList.remove('not-found')
                        cardsSelected = []
                        // Update found items
                        foundItemsScore.innerText--
                        // Update prompt
                        prompt.innerText = 'Well Done! Keep clicking to reveal more cards.'
                    } else {
                        // If cards dont match turn them over
                        prompt.innerText = 'Sorry, guess again! Cards turning over in '
                        counter.innerText = '3'
                        await(delay(1000))
                        counter.innerText = '2'
                        await(delay(1000))
                        counter.innerText = '1'
                        await(delay(1000))
                        counter.innerText = ''
                        prompt.innerText = ''
                        for (let c of cardsSelected){
                            document.getElementById(c).classList.remove(c.slice(0, -2))
                            document.getElementById(c).classList.add('fa-question')
                            document.getElementById(c).style.backgroundColor = 'rgb(78, 114, 190)'
                            cardsSelected = []
                        }
                    }
                }
            }
        })
    }
})