var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
   var aiValue = Math.random() * 3;
   if (aiValue <= 1) {
       aiValue = "rock"
   }
    else if (aiValue <= 2) {
       aiValue = "paper"
   }
    else {
       aiValue = "scissors"
   }
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if (aiValue <= userValue) {
        console.log("You Win!")
    } else if (aiValue == userValue) {
        console.log("Tie")
    } else {
        console.log("You Lost!")
    };
}
// This function sets the scoreboard with the correct points
function setScore(winner) {
    if ('user' === winner ) {
        userPoint +=1
        $('#userPoint').text(userPoint)
    }
    else if ('draw' === winner ) {
        userPoint +=1
        $('#userPoint').text(userPoint)
    }
    else {
        userPoint +=1
        $('#userPoint').text(userPoint)
    }/-/
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = "user" //pickWinner(userValue, aiValue);
    setScore(winner)
    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(function(evt) {
        evaluate(evt); 
        });
});
