document.addEventListener('DOMContentLoaded', (event) => {

    function showPicture(emoji) {
        const pictureContainer = document.getElementById("big-emoji");
        const randomIndex = Math.floor(Math.random() * happyQuotes.length);
        pictureContainer.textContent = happyQuotes[randomIndex];
        pictureContainer.style.fontSize = "1rem";
        pictureContainer.style.color = "black";
        pictureContainer.style.fontWeight = "bold";
        pictureContainer.style.textAlign = "center";
        pictureContainer.style.margin = "0";
        pictureContainer.style.padding = "0";
        pictureContainer.style.width = "100%";
        pictureContainer.style.height = "100%";
        pictureContainer.style.display = "flex";
        pictureContainer.style.justifyContent = "center";
        pictureContainer.style.alignItems = "center";
        pictureContainer.style.backgroundColor = "white";
        pictureContainer.style.borderRadius = "10px";
        pictureContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
        pictureContainer.style.transition = "font-size 0.2s";
        pictureContainer.style.cursor = "pointer";
        pictureContainer.style.width = "100%";


    }

    /* array of happy and motivational quotes*/
    const happyQuotes = [
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
        "The best way to predict the future is to create it. - Peter Drucker",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to get started is to quit talking and begin doing. - Walt Disney",
        "Don't watch the clock; do what it does. Keep   going. - Sam Levenson",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to get started is to quit talking and begin doing. - Walt Disney",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",];


    function getUserMood() {
        var moodRadios = document.getElementsByName('mood');
        for (var i = 0; i < moodRadios.length; i++) {
            if (moodRadios[i].checked) {
                var mood = moodRadios[i].value;
                var message;
                switch (mood) {
                    case "happy":
                        message = "Great! Did you know happiness is doubled when shared with your loved ones?";
                        break;
                    case "sad":
                        message = "That's okay. Always remember 'This too shall pass'.";
                        break;
                    case "meh":
                        message = "Life is just like see-saw, going up and down. At times, we all feel like 'meh', right?";
                        break;
                    case "excited":
                        message = "Yay! Now I'm excited to know what is the reason for your excitement. Could you please share?";
                        break;
                    case "hopeful":
                        message = "Hope for the best, but prepare for the worst! That's what they say.";
                        break;
                    case "grateful":
                        message = "Gratitude unlocks the fullness of life. It turns what we have into enough, and more.";
                        break;
                    case "upset":
                        message = "Do not lose your inner peace for anything whatsoever, even if your whole world seems upset.";
                        break;
                    case "calm":
                        message = "Keep calm and know all things happen for a reason.";
                        break;
                    case "inspired":
                        message = "Attitude is a little thing that makes a big difference. Nothing is impossible.";
                        break;
                    case "anxious":
                        message = "You are doing your best, and that is enough.";
                        break;
                    case "stressed":
                        message = "STRESSED is DESSERTS spelled backwards. So when you're stressed, just grab a couple of cookies!";
                        break;
                    case "lonely":
                        message = "Fall in love with taking care of yourself becuase you are only what you have in the end.";
                        break;
                    case "empty":
                        message = "Remember, you can fill an empty page with anything you like. Paint a pretty picture for yourself!";
                        break;
                    default:
                        message = "You are my Sunshine, my only Sunshine. You make me happy, when skies are grey.";
                }
                return message;
            }
        }
    }

    const textElement = document.getElementById('text');
    const moodRadios = document.querySelectorAll('input[name="mood"]');

    moodRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            var message = getUserMood();
            textElement.textContent = message;
        });
    });



});
