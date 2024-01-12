const _play= document.querySelector(".start");
const startGame= document.querySelector(".startGame");
const score=document.querySelector(".score");
const gameZone = document.querySelector(".gameArea")

const key_press={ArrowUp:false}
let dragon;
console.log(startGame,score,gameZone,_play)
startGame.addEventListener("click",playGame);
document.addEventListener("keydown", keyOn);
document.addEventListener("keyup", keyOff);

function keyOn(e){
    e.preventDefault();
    key_press[e.key]=true;
    console.log(key_press)
}

function keyOff(e){
    e.preventDefault();
    key_press[e.key]=false;
    console.log(key_press)
}

function playGame(){
    dragon={speed:10,score:0};
    dragon.start=true;
    dragon.score=0;
    startGame.style.display="none"
    score.style.display="flex"
    gameZone.classList.remove("hide")
    window.requestAnimationFrame(gameStart)
    let element = document.createElement("div")
    element.setAttribute("class", "dragonClass")
    gameZone.appendChild(element)

    for(let i=0;i<3;i++){
        let enemy= document.createElement("div")
        enemy.setAttribute("class","dragonClass")
        gameZone.appendChild(enemy)
        enemy.style.backgroundColor="green"
    }

    dragon.y=element.offsetTop;
    console.log(element.offsetTop)
}

function move_Enemy(){

}

function gameStart(){
    let dragon_element = document.querySelector(".dragonClass")
    if(dragon.start){
        move_Enemy();
        if(key_press.ArrowUp){dragon.y-=dragon.speed};
        if(!key_press.ArrowUp && dragon.y<782){dragon.y+=dragon.speed};
        dragon_element.style.top=dragon.y+"px";
        window.requestAnimationFrame(gameStart)
        dragon.score++;
        if(dragon.score%1000==0){
            dragon.speed++;
        }
        score.innerText="Score :"+dragon.score;
    }
}
