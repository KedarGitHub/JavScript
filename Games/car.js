const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const levelSelect = document.querySelector(".level");  //try giving get elementByClassName
const gameArea = document.querySelector(".gameArea");

let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player;
startScreen.addEventListener("click", start)
document.addEventListener("keydown", pressOn)
document.addEventListener("keyup", pressOff)

function pressOn(e) { //listening event ,e
    e.preventDefault(); //preventing default value
    keys[e.key] = true;
    console.log("On " + e.key)
}

function pressOff(e) { //listening event ,e
    e.preventDefault(); //preventing default value
    keys[e.key] = false;
    console.log("Off " + e.key)
}

function endGame(){
    player.start = false;   
    startScreen.classList.remove("hide")
}


function start() {
    player = { speed: 1 ,score:0}
    startScreen.classList.add("hide")
    gameArea.innerHTML="";
    player.start = true;
    player.score=0;
    for (let i = 0; i < 10; i++) {
        var roadLines = document.createElement("div");
        roadLines.classList.add("roadLines")
        roadLines.y = i * 150;
        roadLines.style.top = (i * 200) + "px"
        gameArea.appendChild(roadLines)
    }
    window.requestAnimationFrame(gamePlay)  //keep a loop of display and uses a method as parameter
    let car = document.createElement("div")
    car.setAttribute("class", "car")
    gameArea.appendChild(car)
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    for (let i = 0; i < 3; i++) {
        var enemy = document.createElement("div");
        enemy.classList.add("enemy")
        enemy.y = ((i+1)*600)*-1
        enemy.style.top = enemy.y + "px"
        enemy.style.backgroundColor="red";
        enemy.style.left= Math.floor(Math.random()*350)+"px"
        gameArea.appendChild(enemy)
    }
}

function moveLines() {
    let lines = document.querySelectorAll(".roadLines");
    lines.forEach(function (item) {
        if (item.y > 1500) {
            item.y -= 1500;
        }
        item.y += player.speed;
        item.style.top = item.y + "px"
    })
}

function isCollide (a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !((aRect.top>bRect.bottom)||
    (aRect.bottom<bRect.top)||
    (aRect.left>bRect.right)||
    (aRect.right<bRect.left ))
}

function moveEnemy(car) {
    let enemy = document.querySelectorAll(".enemy");
    enemy.forEach(function (item) {
        if(isCollide(car,item)){
            console.log("Hit");
            endGame();
                  
        };
        if (item.y > 1500) {
            item.y -= 1500;
            
        item.style.left= Math.floor(Math.random()*350)+"px"
        item.style.bottom=700+"px"
        }
        item.y += player.speed;
        item.style.top = item.y + "px"
    })
}

function gamePlay() {
    let roadLine = document.querySelector(".roadLines")
    let car = document.querySelector(".car")
    let road = gameArea.getBoundingClientRect(); //returns tyhe top , left , bottom , right values
    if (player.start) {
        moveLines();
        moveEnemy(car);
        if (keys.ArrowUp && player.y > 200) { player.y -= player.speed }
        if (keys.ArrowDown && player.y < 600) { player.y += player.speed }
        if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
        if (keys.ArrowRight && player.x < (road.width - 55)) { player.x += player.speed }
        car.style.left = player.x + 'px'
        car.style.top = player.y + 'px'
        window.requestAnimationFrame(gamePlay)
        player.score++;
        if(player.score%1000==0){
            player.speed++;
        }
        score.innerText="Score :"+player.score;
    }
}
