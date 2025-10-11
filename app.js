let gameSeq=[];
let userSeq=[];
let btns =["yellow","red","purple","green"];
let started=false;
let level=0

let h2=document.querySelector("h2")

function startGame() {
  if (!started) {
    console.log("Game Begin");
    started = true;
    levelUp();
  }
}


document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText="Level "+level;
    
    let ranIdx =Math.floor(Math.random()*4);
    let ranColor=btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
    } 

let darkTheme = "black"; 

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game Over, Your score was ${level}. Press Any Key To Restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = darkTheme;
    }, 200);
    reset();
  }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}

function reset() {
  level = 0;
  gameSeq = [];
  started = false;
  userSeq = [];
}

