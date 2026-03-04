/*-------------------------------- Constants --------------------------------*/
const player = {
boardstate:[0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0],
shipA: [],//3x1
shipB: [],//3x1(2nd)
shipC: [],//2x1
shipD: [],//4x1
shipE: [],//5x1
Health: 17,
Ammo: 20,

placement(x, shiptype, rotate) {
    switch(shiptype){
        case "shipA":{
            this.shipA[4] = 3
            if (this.shipA[0] === "P"){
                    this.boardstate[this.shipA[0]] = 0
                    this.boardstate[this.shipA[1]] = 0
                    this.boardstate[this.shipA[2]] = 0
                    this.boardstate[this.shipA[3]] = 0
                }
                {
                const setvalA =(i,y)=>{
                            this.boardstate[y] = "A"
                            this.shipA[i] = (y)
                        }
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0){
                    console.log("Space occupiedA1")
                    } 
                    else {                        
                        setvalA(1,x+1)
                        setvalA(2,x)
                        setvalA(3,x-1)
                        this.shipA[0] = "P"
                    }}
                else if (rotate === "Vert") {                
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedA2")
                    } 
                    else {
                        setvalA(1,x-10)
                        setvalA(2,x)
                        setvalA(3,x+10)
                        this.shipA[0] = "P"
                    }
                }
            };
            break;
        }
        case "shipB":{
            this.shipB[4] = 3
            if (this.shipB[0] === "P"){
                    this.boardstate[this.shipB[0]] = 0
                    this.boardstate[this.shipB[1]] = 0
                    this.boardstate[this.shipB[2]] = 0
                    this.boardstate[this.shipB[3]] = 0
                }
            {
                const setvalB =(i,y)=>{
                            this.boardstate[y] = "B"
                            this.shipB[i] = (y)
                        }
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0){
                    console.log("Space occupiedB1")
                    } 
                    else {
                        setvalB(1,x-1)
                        setvalB(2,x)
                        setvalB(3,x+1)
                        this.shipB[0] = "P"
                    }
                }
                else if (rotate === "Vert"){
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedB2")
                    } 
                    else {
                        setvalB(1,x-10)
                        setvalB(2,x)
                        setvalB(3,x+10)
                        this.shipB[0] = "P"
                    }
                }
            };
        break;
        }
        case "shipC":{
            this.shipC[3] = 2 
            if (this.shipC[0] === "P"){
                    this.boardstate[this.shipC[0]] = 0
                    this.boardstate[this.shipC[1]] = 0
                    this.boardstate[this.shipC[2]] = 0
                }
            {
                const setvalC =(i,y)=>{
                            this.boardstate[y] = "C"
                            this.shipC[i] = (y)}
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 ||  this.boardstate[x+1] !=0){
                    console.log("Space occupiedC1")
                    } 
                    else {
                        setvalC(1,x)
                        setvalC(2,x+1)
                        this.shipC[0] = "P"
                    }
                }
                else if (rotate === "Vert"){                
                    if (this.boardstate[x] != 0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedC2")
                    } 
                    else {
                        setvalC(1,x)
                        setvalC(2,x+10)
                        this.shipC[0] = "P"
                    }
                }
            };
        break;
        }
        case "shipD":{
            this.shipD[5] = 4
            if (this.shipD[0] === "P"){
                    this.boardstate[this.shipD[0]] = 0
                    this.boardstate[this.shipD[1]] = 0
                    this.boardstate[this.shipD[2]] = 0
                    this.boardstate[this.shipD[3]] = 0
                    this.boardstate[this.shipD[4]] = 0
                }
            {
                const setvalD =(i,y)=>{
                            this.boardstate[y] = "D"
                            this.shipD[i] = (y)
                        }
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0 || this.boardstate[x+2] !=0){
                    console.log("Space occupiedD1")
                    } 
                    else {
                        setvalD(1,x-1)
                        setvalD(2,x)
                        setvalD(3,x+1)
                        setvalD(4,x+2)
                        this.shipD[0] = "P"
                    }}
                else if (rotate === "Vert"){                
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0 || this.boardstate[x+20] !=0){
                    console.log("Space occupiedD2")
                    } 
                    else {
                        setvalD(1,x-10)
                        setvalD(2,x)
                        setvalD(3,x+10)
                        setvalD(4,x+20)
                        this.shipD[0] = "P"
                    }
                }
            };
        break;
        }
        case "shipE":{
            this.shipE[6] = 5
            if (this.shipE[0] === "P"){
                    this.boardstate[this.shipE[0]] = 0
                    this.boardstate[this.shipE[1]] = 0
                    this.boardstate[this.shipE[2]] = 0
                    this.boardstate[this.shipE[3]] = 0
                    this.boardstate[this.shipE[4]] = 0
                    this.boardstate[this.shipE[5]] = 0
                }
            { 
                const setvalE= (i,y) =>{
                            this.boardstate[y] = "E"
                            this.shipE[i] = (y)
                        }  
                if(rotate === "Hori") {
                   
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x-2] !=0 || this.boardstate[x+1] !=0 || this.boardstate[x+2] !=0){
                    console.log("Space occupiedE1")
                    } 
                    else {
                        setvalE(1,x-2)
                        setvalE(2,x-1)
                        setvalE(3,x)
                        setvalE(4,x+1)
                        setvalE(5,x+2)
                        this.shipE[0] = "P"
                    }}
                else if (rotate === "Vert"){                
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x-20] !=0|| this.boardstate[x+10] !=0 || this.boardstate[x+20] !=0){
                    console.log("Space occupiedE2")
                    } 
                    else {    
                        setvalE(1,x-20)
                        setvalE(2,x-10)
                        setvalE(3,x)
                        setvalE(4,x+10)
                        setvalE(5,x+20)
                        this.shipE[0] = "P"
                    }
                }
            };
        break;
        }
        default:
        console.log("Error! This should not appear.")
            }
        },
reset(){
player.boardstate = [0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0]
    player.shipA = []//3x1
    player.shipB = []//3x1(2nd)
    player.shipC = []//2x1
    player.shipD= []//4x1
    player.shipE= []//5x1
    player.Ammo = 20
    player.Health = 17
}}

    
/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const tiles = document.querySelectorAll(".tile");
const ammocount = document.querySelector(".display")
const fullboard = document.getElementById("fullboard")
const ammoinput = document.getElementById("ammoinput")
const startgame = document.getElementById("startgame")
const pregame = document.getElementById("pregame")
const gameboard = document.getElementById("gameboard")
const board = document.getElementById("board")
const display2 = document.querySelector(".display2")
const loss = document.getElementById("Loss")
const win = document.getElementById("Win")
const restart = document.getElementById("Restart")
/*----------------------------- Event Listeners -----------------------------*/
ammoinput.addEventListener("click", () =>{
player.Ammo = document.querySelector("#ammoinputbox").value
console.log(player.Ammo)
displayplayerammo()
} )

startgame.addEventListener("click", () =>{    
    pregame.classList.add("hidden")    
    gameboard.classList.remove("hidden")
    ammocount.textContent = "Remaining Ammo: " + player.Ammo  //displays total ammo left at start
} )

restart.addEventListener("click", ()=>{
    player.reset()
    restart.classList.add("hidden")
    pregame.classList.remove("hidden")
    loss.classList.add("hidden")
    win.classList.add("hidden")
    player.placement(5,"shipA","Hori")
player.placement(48,"shipE","Vert")
player.placement(8,"shipC","Hori")
player.placement(76,"shipD", "Vert")
player.placement(22, "shipB", "Hori")
displayplayerammo()
})


tiles.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);// This log is for testing purposes to verify we're getting the correct value        
    fire(event.target.innerText);
    ammocount.textContent = "Remaining Ammo: " + player.Ammo //updates Ammocounter
    console.log("p"+player.Health)
    if (player.boardstate[event.target.innerText] ==="X"){
        button.style.backgroundColor = "red"
    }
    else if (player.boardstate[event.target.innerText] === "O"){
        button.style.backgroundColor = "#1eb0ca"
    }
    gamestate()
    if (gamestate() === "true"){
        tiles.forEach((button) =>{button.style.backgroundColor = "lightgrey"})}
    }
    )
}); 
const gamestate = ()=>{
    if (player.Ammo === 0){
        gameboard.classList.add("hidden")
        loss.classList.remove("hidden")
        restart.classList.remove("hidden")
        return "true"
    }
    else if (player.Health === 0){
        gameboard.classList.add("hidden")
        win.classList.remove("hidden")
        restart.classList.remove("hidden")
        return "true"
    } 

}




/*-------------------------------- Functions --------------------------------*/
const displayplayerammo = function(){
    document.querySelector(".input").textContent = ("Starting Ammo: " + player.Ammo)
}
displayplayerammo()





const fire = function(x){
    switch(player.boardstate[x]){
        case 0:
        display2.textContent = "Miss";
        player.boardstate[x] = "O"
        player.Ammo -= 1;
        break;
        case "A":
            display2.textContent = "Hit";
            player.boardstate[x] = "X";
            player.shipA[4] -=1;
            player.Health -=1;
        if (player.shipA[4] <= 0){
            display2.textContent = "Ship Sunk"
        }
        player.Ammo-=1;
            break;
        case "B":
            display2.textContent = "Hit";
            player.boardstate[x] = "X"
            player.shipB[4] -=1;
            player.Health -=1;
        if (player.shipB[4] <= 0){
            display2.textContent = "Ship Sunk"
        }
        player.Ammo-=1;
            break;
        case "C":
            display2.textContent = "Hit";
            player.boardstate[x] = "X"
            player.shipC[3] -=1;
            player.Health -=1;
        if (player.shipC[3] <= 0){
            display2.textContent = "Destroyer Sunk"
        }
        player.Ammo-=1;
            break;
        case "D":
            display2.textContent = "Hit";;
            player.boardstate[x] = "X"
            player.shipD[5] -=1;
            player.Health -=1;
        if (player.shipD[5] <= 0){
            display2.textContent = "Ship Sunk";
        }
        player.Ammo-=1;
            break;
        case "E":
        display2.textContent = "Hit";;
        player.boardstate[x] = "X";
        player.shipE[6] -=1;
        player.Health -=1;
        if (player.shipE[6] <= 0){
            display2.textContent = "Carrier Sunk";
        }
        player.Ammo-=1
        break;
        default:
        display2.textContent = "Already shot at, please select another tile";
        }
    }

player.placement(5,"shipA","Hori")
player.placement(48,"shipE","Vert")
player.placement(8,"shipC","Hori")
player.placement(76,"shipD", "Vert")
player.placement(22, "shipB", "Hori")



