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