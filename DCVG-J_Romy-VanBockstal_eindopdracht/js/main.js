alert (' U opend het eindwerk: DVG1-J_Romy-VanBockstal_eindopdracht')

// sudoku: om de cijfers te doen verdwijnen
const cijfers = document.querySelectorAll('.removable-numbers')

cijfers.forEach((cijfer) => {
    cijfer.style.opacity = '0'
})

let opl1Solved = false;
let opl2Solved = false;
let opl3Solved = false;

// Eerste raadsel: rebus
const opl1 = document.querySelector('#oplossing-1')
const button1 = document.querySelector('#button-1')
const score1 = document.querySelector('#score-1')
const scoreGif = document.querySelector('#score-gif')

function opl1Function(){
    if (opl1.value.toLowerCase().replaceAll(' ', '')  === "romy van bockstal".replaceAll(' ', '')){ //hoofdletter en spatie fouten mag/kan 
        scoreGif.src = "assets/1/geslaagd.gif"; 
        scoreGif.style.display = 'block';
        opl1.style.backgroundColor = '#90EE90'
        opl1Solved = true; 
        checkAllSolved();
    }
    else {
        scoreGif.src = "assets/1/gefaald.gif"; 
        scoreGif.style.display = 'block';
        opl1.style.backgroundColor = '#FFCCCB'
    }
}

button1.addEventListener('click', opl1Function )

// tweede raadsel
const opl2 = document.querySelector('#oplossing-2')
const button2 = document.querySelector('#button-2')
const score2 = document.querySelector('#score-2')
const scoreGif2 = document.querySelector('#score-gif2');
 
function opl2Function(){
    if (opl2.value ==="24.12"){
        scoreGif2.src = "assets/2/geslaagd.gif";
        scoreGif2.style.display = 'block';
        opl2.style.backgroundColor = '#90EE90'
        cijfers.forEach((cijfer) => {
            cijfer.style.opacity = '1'
        })
        opl2Solved = true; 
        checkAllSolved();
    }
    else {
        scoreGif2.src = "assets/2/gefaald.gif";
        scoreGif2.style.display = 'block';
        opl2.style.backgroundColor = '#FFCCCB'
    }
}

button2.addEventListener('click', opl2Function )


// derde raadsel
const opl3 = document.querySelector('#oplossing-3')
const button3 = document.querySelector('#button-3')
const score3 = document.querySelector('#score-3')
const scoreGif3 = document.querySelector('#score-gif3');

function opl3Function(){
    
    if (opl3.value.toLowerCase() === "artevelde"){
        scoreGif3.src = "assets/3/geslaagd.gif";
        scoreGif3.style.display = 'block';
        opl3.style.backgroundColor = '#90EE90'
        opl3Solved = true; 
        checkAllSolved();
    }
    else {
        scoreGif3.src = "assets/3/gefaald.gif";
        scoreGif3.style.display = 'block';
        opl3.style.backgroundColor = '#FFCCCB'
    }
}

button3.addEventListener('click', opl3Function )

function checkAllSolved() {
    if (opl1Solved && opl2Solved && opl3Solved) {
        const resultaat = document.querySelector('#score');
        resultaat.innerHTML = `
            <h3 class="h3">Score</h3>
            <p>Goed gedaan geslaagd! ${score1.textContent} ${score2.textContent} ${score3.textContent}</p>
            `;
    }
}

const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', function() {
    window.location.reload();
});