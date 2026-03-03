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
        }
    }

/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const tiles = document.querySelectorAll(".tile");
const ammocount = document.querySelector(".display")
const tileID = document.getElementById("board")
/*----------------------------- Event Listeners -----------------------------*/
tiles.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);// This log is for testing purposes to verify we're getting the correct value        
    fire(event.target.innerText);
    //button.removeEventListener("click", (event)) <-this does not currently work as planned
    ammocount.textContent = player.Ammo //updates Ammocounter
    if (player.boardstate[event.target.innerText] ==="X"){
        button.style.backgroundColor = "red"
    }
    else if (player.boardstate[event.target.innerText] === "O"){
        button.style.backgroundColor = "#1eb0ca"
    }
    currentstatus()
    })
  });


/*-------------------------------- Functions --------------------------------*/
ammocount.textContent = player.Ammo //displays total ammo left at start

const currentstatus = function(){
    if (player.Health === 0){
        
        console.log("you win")
    }
    else if (player.Ammo === 0){
        
        console.log("you lose")
    }
}
currentstatus()


const fire = function(x){
    switch(player.boardstate[x]){
        case 0:
        console.log("MISS");
        player.boardstate[x] = "O"
        player.Ammo -= 1;
        break;
        case "A":
            console.log("Hit");
            player.boardstate[x] = "X";
            player.shipA[4] -=1;
            player.Health -=1;
        if (player.shipA[4] <= 0){
            console.log("ShipA Sunk")
        }
        player.Ammo-=1;
            break;
        case "B":
            console.log("Hit");
            player.boardstate[x] = "X"
            player.shipB[4] -=1;
            player.Health -=1;
        if (player.shipB[4] <= 0){
            console.log("ShipB Sunk")
        }
        player.Ammo-=1;
            break;
        case "C":
            console.log("Hit");
            player.boardstate[x] = "X"
            player.shipC[3] -=1;
            player.Health -=1;
        if (player.shipC[3] <= 0){
            console.log("ShipC Sunk")
        }
        player.Ammo-=1;
            break;
        case "D":
            console.log("Hit");
            player.boardstate[x] = "X"
            player.shipD[5] -=1;
            player.Health -=1;
        if (player.shipD[5] <= 0){
            console.log("ShipD Sunk")
        }
        player.Ammo-=1;
            break;
        case "E":
        console.log("Hit");
        player.boardstate[x] = "X";
        player.shipE[6] -=1;
        player.Health -=1;
        if (player.shipE[6] <= 0){
            console.log("Carrier Sunk")
        }
        player.Ammo-=1
        break;
        default:
        console.log("Already shot at, select another area");
        }
    }

player.placement(5,"shipA","Hori")
player.placement(48,"shipE","Vert")
player.placement(8,"shipC","Hori")
player.placement(76,"shipD", "Vert")
player.placement(22, "shipB", "Hori")



