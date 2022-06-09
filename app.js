let random_num = Math.floor(Math.random()*15 + 1);

let btn = document.getElementById('guess-btn');

let input = document.getElementById('num-input');

let again = document.getElementById('again');
again.disabled = true;

let guesses = 0;

btn.addEventListener('click' ,function () {
    let input = document.getElementById('num-input').value;

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
        btn.remove();
        again.disabled = false;
    }

    guesses++;
})

again.addEventListener('click', function() {
    window.location.reload();
})