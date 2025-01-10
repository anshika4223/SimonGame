let gameSeq=[];
let userSeq=[];

let btns=["pink","yellow","green","blue"];

let started=false;
let level=0;
let h=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}



function levelUp(){
    userSeq=[];
    level++;
    h.innerText =`Level ${level}`;
   

    let randomIdx=Math.floor(Math.random()*3);
    let randomCol=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx])
    {
       if(userSeq.length==gameSeq.length)
       {
          setTimeout(levelUp,1000);
       }
    }
    else
    {
        h.innerHTML=`Game Over! Your score was <b>${level}</b>.<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },200);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);
   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}