let random_num = Math.floor(Math.random()*15 + 1);

let btn = document.getElementById('guess-btn');

let input = document.getElementById('num-input');

let again = document.getElementById('again');
again.disabled = true;

let guesses = 0;

function isEmpty() {
    if(input != "") {
        btn.removeAttribute("disabled");
    }
}

btn.addEventListener('click' ,function () {
    let input = document.getElementById('num-input').value;

    if(input >= 16 || input < 1 ) {
        alert("You must enter a number between 1 and 15!");
    }

    else if (input == random_num) {
        alert(`You won! You guessed the number in ${guesses} tries.`);
        btn.remove();
        again.disabled = false;
    }

    else if (input < random_num) {
        alert("Try guessing higher than " + input);
    }

    else if (input > random_num) {
        alert("Try guessing lower than " + input);
    }

    else if (input == 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z') {
        alert("You can only enter a number!");
    }

    guesses++;
})

again.addEventListener('click', function() {
    window.location.reload();
})