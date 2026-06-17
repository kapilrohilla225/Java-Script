let gameSeq =[];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if(started == false){
        started = true;
        levelUP();
    }

})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250)
}

function levelUP() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randombtn);
}

function checkAns(idx) {
    console.log("Current level :",level);
    if(userSeq[idx] === gameSeq[idx]) {
        console.log("Same value");

        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,500);
        }
    }
    else{

        h2.innerHTML = `Game Over! <br>Your score is ${level}<br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        // let highestScore = 0;
        // let high = document.querySelector("#high");
        // if(level > highestScore){
        // highestScore = level;
        // high.innerText = highestScore;
        // }
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
    btn.addEventListener("click",btnPress);

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}