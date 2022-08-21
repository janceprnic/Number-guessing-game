//Generating a random number
let random_num = Math.floor(Math.random()*15 + 1);

//Creating variables for the 2 buttons, an input and guess counter
let guess_btn = document.querySelector('.guess-btn');

let input = document.querySelector('.num-input');

let play_again = document.querySelector('.play-again');

let guesses = 0;

//The game functionality which activates after you click the "guess button"
guess_btn.addEventListener('click' ,function () {
    
    let input = document.querySelector('.num-input').value;

    if(input == 0 || input < 1 || input > 15 ) {
        alert("You must enter a number between 1 and 15!");
    }

    else if (input < random_num) {
        alert("Try guessing higher than " + input);
    }

    else if (input > random_num) {
        alert("Try guessing lower than " + input);
    }

    else if (input == random_num) {
        alert(`You won! You guessed the number in ${guesses} tries.`);

        guess_btn.remove();

        play_again.style.display = "block";
    }

    guesses++;
})

//Function that refreshes the page and sets a new random number when you click the "Play Again?" button
play_again.addEventListener('click', function() {
    window.location.reload();
})