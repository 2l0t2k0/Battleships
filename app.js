/* const gameState = { 
Current Stage:
->start screen
->player 1 placement(need check that all ships placed)
->player 2 placement
->(loop start) player 1 shot
-> player 2 shot
-> (loop end) either player hp = 0
-> winner is player hp > 0
-> reset button to start or player 1 placement
}

*/

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
Health: 16,

placement(x, shiptype, rotate) {// requires collision logic test(how?)
    switch(shiptype){
        case "shipA":{
            if (this.shipA[0] === "P"){
                    this.boardstate[this.shipA[0]] = 0
                    this.boardstate[this.shipA[1]] = 0
                    this.boardstate[this.shipA[2]] = 0
                    this.boardstate[this.shipA[3]] = 0
                }
            {
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0){
                    console.log("Space occupiedA1")
                    } 
                    else {
                        this.boardstate[x] = "A"//this.ShipA[2]
                        this.shipA[2] = x
                        this.boardstate[x-1] = "A"//this.ShipA[1]
                        this.shipA[1] = (x-1)
                        this.boardstate[x+1] = "A"//this.ShipA[3]
                        this.shipA[3] = (x+1)
                        this.shipA[0] = "P"
                    }}
                else if (rotate === "Vert") {                
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedA2")
                    } 
                    else {
                        this.boardstate[x] = "A"//this.ShipA[2]
                        this.shipA[2] = x
                        this.boardstate[x-10]= "A"//this.ShipA[1]
                        this.shipA[1] = (x-10)
                        this.boardstate[x+10]= "A"//this.shipA[3]
                        this.shipA[3] = (x+10)
                        this.shipA[0] = "P"
                    }
                }
            };
            break;
        }
        case "shipB":{
            if (this.shipB[0] === "P"){
                    this.boardstate[this.shipB[0]] = 0
                    this.boardstate[this.shipB[1]] = 0
                    this.boardstate[this.shipB[2]] = 0
                    this.boardstate[this.shipB[3]] = 0
                }
            {
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0){
                    console.log("Space occupiedB1")
                    } 
                    else {
                        this.boardstate[x] = "B"//this.ShipB[2]
                        this.shipB[2] = x
                        this.boardstate[x-1] = "B"//this.ShipB[1]
                        this.shipB[1] = (x-1)
                        this.boardstate[x+1] = "B"//this.ShipB[3]
                        this.shipB[3] = (x+1)
                        this.shipB[0] = "P"
                    }
                }
                else if (rotate === "Vert"){                
                    }
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedB2")
                    } 
                    else {
                        this.boardstate[x] = "B"//this.ShipB[2]
                        this.shipB[2] = x
                        this.boardstate[x-10]= "B"//this.ShipB[1]
                        this.shipB[1] = (x-10)
                        this.boardstate[x+10]= "B"//this.shipB[3]
                        this.shipB[3] = (x+10)
                        this.shipB[0] = "P"
                }
            }
        };
        break;
        case "shipC":{
            if (this.shipC[0] === "P"){
                    this.boardstate[this.shipC[0]] = 0
                    this.boardstate[this.shipC[1]] = 0
                    this.boardstate[this.shipC[2]] = 0
                }
            {
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 ||  this.boardstate[x+1] !=0){
                    console.log("Space occupiedC1")
                    } 
                    else {
                        this.boardstate[x] = "C"//this.ShipC[2]
                        this.shipC[2] = x
                        this.boardstate[x+1] = "C"//this.ShipC[1]
                        this.shipC[1] = (x+1)
                        this.shipC[0] = "P"
                    }}
                else if (rotate === "Vert"){                
                    }
                    if (this.boardstate[x] != 0 || this.boardstate[x+10] !=0){
                    console.log("Space occupiedC2")
                    } 
                    else {
                        this.boardstate[x] = "C"//this.ShipC[2]
                        this.shipC[2] = x
                        this.boardstate[x+10]= "C"//this.ShipC[1]
                        this.shipC[1] = (x+10)
                        this.shipC[0] = "P"
                }}};
        break;
        case "shipD":{
            if (this.shipD[0] === "P"){
                    this.boardstate[this.shipD[0]] = 0
                    this.boardstate[this.shipD[1]] = 0
                    this.boardstate[this.shipD[2]] = 0
                    this.boardstate[this.shipD[3]] = 0
                    this.boardstate[this.shipD[4]] = 0
                }
            {
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x+1] !=0 || this.boardstate[x+2] !=0){
                    console.log("Space occupiedD1")
                    } 
                    else {
                        this.boardstate[x] = "D"//this.ShipD[2]
                        this.shipD[2] = x
                        this.boardstate[x-1] = "D"//this.ShipD[1]
                        this.shipD[1] = (x-1)
                        this.boardstate[x+1] = "D"//this.ShipD[3]
                        this.shipD[3] = (x+1)
                        this.boardstate[x+2] = "D"//this.shipD[4]
                        this.shipD[4] = (x+2)
                        this.shipD[0] = "P"
                    }}
                else if (rotate === "Vert"){                
                    }
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x+10] !=0 || this.boardstate[x+20] !=0){
                    console.log("Space occupiedD2")
                    } 
                    else {
                        this.boardstate[x] = "D"//this.ShipD[2]
                        this.shipD[2] = x
                        this.boardstate[x-10] = "D"//this.ShipD[1]
                        this.shipD[1] = (x-10)
                        this.boardstate[x+10] = "D"//this.ShipD[3]
                        this.shipD[3] = (x+10)
                        this.boardstate[x+20] = "D"//this.shipD[4]
                        this.shipD[4] = (x+20)
                        this.shipD[0] = "P"
                }}};
        break;
        case "shipE":{
            if (this.shipE[0] === "P"){
                    this.boardstate[this.shipE[0]] = 0
                    this.boardstate[this.shipE[1]] = 0
                    this.boardstate[this.shipE[2]] = 0
                    this.boardstate[this.shipE[3]] = 0
                    this.boardstate[this.shipE[4]] = 0
                    this.boardstate[this.shipE[5]] = 0
                }
            {
                if(rotate === "Hori") { 
                    if (this.boardstate[x] != 0 || this.boardstate[x-1] !=0 || this.boardstate[x-2] !=0 || this.boardstate[x+1] !=0 || this.boardstate[x+2] !=0){
                    console.log("Space occupiedE1")
                    } 
                    else {//to shorten to singular function
                        this.boardstate[x] = "E"//this.ShipE[2]
                        this.shipE[2] = x
                        this.boardstate[x-1] = "E"//this.ShipE[1]
                        this.shipE[1] = (x-1)
                        this.boardstate[x-2] = "D"//this.ShipE[5]
                        this.shipE[5] = (x-2)
                        this.boardstate[x+1] = "D"//this.ShipE[3]
                        this.shipE[3] = (x+1)
                        this.boardstate[x+2] = "D"//this.shipE[4]
                        this.shipE[4] = (x+2)
                        this.shipE[0] = "P"
                    }}
                else if (rotate === "Vert"){                
                    }
                    if (this.boardstate[x] != 0 || this.boardstate[x-10] !=0 || this.boardstate[x-20] !=0|| this.boardstate[x+10] !=0 || this.boardstate[x+20] !=0){
                    console.log("Space occupiedE2")
                    } 
                    else {
                        const setvalEV =(y)=>{
                            this.boardstate[y] = "E"
                            this.shipE[y] = (y)
                        } 
                        setvalEV(x)
                        setvalEV(x-10)
                        setvalEV(x-20)
                        setvalEV(x+10)
                        setvalEV(x+20)
                        this.shipE[0] = "P"
                }}};
        break;
        
        default:
        console.log("This should not appear.")
    }}}

player.placement(5,"shipA","Hori")
player.placement(48,"shipE","Vert")
player.placement(8,"shipC","Hori")
player.placement(76,"shipD", "Vert")
player.placement(22, "shipB", "Hori")


const fire = function(x){
    switch(player.boardstate[x]){
        case 0:
        console.log("MISS");
        player.boardstate[x] = "O";
        break;
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        console.log("Hit");
        player.boardstate[x] = "X";
        player.Health -=1;
        break;
        default:
        console.log("Already shot at, select another area");
    }}
//const board = Array.length(10) player.boardstate.map

fire(2)
fire(2)
fire(5)
fire(5)
fire(12)
fire(8)


console.log(player.boardstate)
console.log(player.Health)
console.log(player.shipA)
