function diceRoller() {
    const inputDice = document.querySelector('#NOD');
    const rollButton = document.querySelector('#rollButton');

    rollButton.addEventListener("click", (event) => {
        reset();
        let numberOfDice = inputDice.value;

        let diceRow;

        for(let i = 0; i < numberOfDice; i++) {
            if(i % 3 === 0) {
                diceRow = document.createElement('div');
                const page = document.querySelector('#page');
                diceRow.setAttribute('id', 'diceRow');
                page.appendChild(diceRow);
            }
            diceRow.appendChild(diceCreation(randomNumberPicker()));
        }
    });
}

function randomNumberPicker() {
    let number = Math.random() * 6; //bc we have 6 options
    number = Math.floor(number) + 1;
    return number;
}

function reset() {
    const page = document.querySelector('#page');
    const existingDiceRows = page.querySelectorAll('#diceRow');
    existingDiceRows.forEach(row => row.remove());
    
    for (let i = 1; i <= 6; i++) {
        let diceId = `#dice${i}`;
        let diceElement = document.querySelectorAll(diceId);
        if (diceElement.length > 0) {
            for(const element of diceElement) {
                element.style.display = "none";
            }   
        }
    }
}

function diceCreation(number) {
    const page = document.querySelector('#page');
    const dice = document.createElement('div');

    let diceId = `dice${number}`;
    dice.setAttribute('id', diceId);
    page.appendChild(dice);

    for(let i = 0; i < number; i++) {
        const diceDot = document.createElement('div');
        let dotId = `dice${number}Dot`;
        diceDot.setAttribute('id', dotId);

        diceDot.textContent = ".";

        dice.appendChild(diceDot);
    }

    return dice;
}

diceRoller();