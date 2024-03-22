function getUserMood(){
    var mood = document.getElementsByName('mood');
    for (i = 0; i < mood.length; i++) {
        if (mood[i].checked){
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
                    message = "You are my Sunshine, my only Sunshine. You make me happy, when skies are grey."
              }
        }
            
    }
}