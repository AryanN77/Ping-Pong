const userstart = [200, 300];
let userlocation = userstart;
const ballstart = [400,300];
let balllocation = ballstart;
let xDirection = 2;
let BoardHeight = 100;
let BoardWidth = 20;
let ballwidth = 20;
let yDirection = 2;
let gamearea = document.querySelector(".area")
let timerid;
let score = 0;

function moveuser() {
    user.style.left = userlocation[0] + 'px';
    user.style.top = userlocation[1] + 'px';
}

let user = document.createElement('div');
user.classList.add("user");
gamearea.appendChild(user);
moveuser()

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (userlocation[1] >= 110) {
                userlocation[1] -= 10;
                moveuser()
                break;
            }
        case "ArrowDown":
            if (userlocation[1] <= 490) {
                userlocation[1] += 10;
                moveuser()
                break;
            }
    }
})

function moveball(){ 
    ball.style.left = balllocation[0] + 'px'; 
    ball.style.top = balllocation[1] + 'px'; 
}
function shiftball() {
    balllocation[0]+=xDirection;
    balllocation[1]+=yDirection;
    moveball();
    checkcollisions();
}

function checkcollisions(){
    if(balllocation[1] > 585){
        changedirection();
    }
    if(balllocation[1] < 100){
        changedirection();
    }
    if(balllocation[0] > 1430){
        changedirection();
    }
    if(balllocation[0] < 160){
    clearInterval(timerid);
    }
    if(balllocation[0] < (userlocation[0]+BoardWidth) && balllocation[0] > (userlocation[0]) && balllocation[1]> userlocation[1] && balllocation[1]<(userlocation[1]+BoardHeight)){
        changedirection()
    }
}

function changedirection(){
    if(xDirection === 2 && yDirection === 2 ){
        yDirection = -2
        return;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return;
    }
    if(xDirection === -2 && yDirection ===2){
        xDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
    }
}

let ball = document.createElement('div');
ball.classList.add("ball");
gamearea.appendChild(ball);
moveball();
// shiftball();


timerid = setInterval(shiftball,10)