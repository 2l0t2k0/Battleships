

const player = {
boardstate: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
shipA: [],//3x1
shipB: [],//3x1(2nd)
shipC: [],//2x1
shipD: [],//4x1
shipE: [],//5x1
Health: 16,

placement(x, shiptype, rotate) {// requires collision logic test(how?)
    switch(shiptype){
        case "shipA":
            if (this.shipA[0] === "P"){
                this.boardstate[this.shipA[1]] = 0
                this.boardstate[this.shipA[2]] = 0
                this.boardstate[this.shipA[3]] = 0
            }
            {
                if(rotate === "Hori") {  //possible to shrink?
                    this.boardstate[x] = "A"//this.ShipA[2]
                    this.shipA[2] = x
                    this.boardstate[x-1] = "A"//this.ShipA[1]
                    this.shipA[1] = (x-1)
                    this.boardstate[x+1] = "A"//this.ShipA[3]
                    this.shipA[3] = (x+1)
                    this.shipA[0] = "P"
            }
                else if (rotate === "Vert"){
                    this.boardstate[x] = "A"//this.ShipA[2]
                    this.shipA[2] = x
                    this.boardstate[x-4]= "A"//this.ShipA[1]
                    this.shipA[1] = (x-4)
                    this.boardstate[x+4]= "A"//this.shipA[3]
                    this.shipA[3] = (x+4)
                    this.shipA[0] = "P"
            }};
        break;
        case "shipB":
            if (this.shipB[0] === "P"){
                this.boardstate[this.shipB[1]] = 0
                this.boardstate[this.shipB[2]] = 0
                this.boardstate[this.shipB[3]] = 0
            }
            {
                if(rotate === "Hori") {
                    this.boardstate[x] = "B"//this.ShipB[2]
                    this.shipB[2] = x
                    this.boardstate[x-1] = "B"//this.ShipB[1]
                    this.shipB[1] = (x-1)
                    this.boardstate[x+1] = "B"//this.ShipB[3]
                    this.shipB[3] = (x+1)
                    this.shipB[0] = "P"
            }
                else if (rotate === "Vert"){
                    this.boardstate[x] = "B"//this.ShipB[2]
                    this.shipB[2] = x
                    this.boardstate[x-4]= "B"//this.ShipB[1]
                    this.shipB[1] = (x-4)
                    this.boardstate[x+4]= "B"//this.shipB[3]
                    this.shipB[3] = (x+4)
                    this.shipB[0] = "P"
            }};
            break;
        case "shipC": 
            if (this.shipC[0] === "P"){
                this.boardstate[this.shipB[1]] = 0
                this.boardstate[this.shipB[2]] = 0
            }
            {
                if(rotate === "Hori") {
                    this.boardstate[x] = "C"//this.ShipC[2]
                    this.shipC[2] = x
                    this.boardstate[x-1] = "C"//this.ShipC[1]
                    this.shipC[1] = (x-1)
                    this.shipC[0] = "P"
            }
                else if (rotate === "Vert"){
                    this.boardstate[x] = "C"//this.ShipC[2]
                    this.shipC[2] = x
                    this.boardstate[x-4]= "C"//this.ShipB[1]
                    this.shipC[1] = (x-4)
                    this.shipC[0] = "P"
            }};
            break;
        default:
        console.log("This should not appear.")
}}}
//const board = []
//const WWWD = player.boardstate
//while (WWWD.length) board.push(WWWD.splice(0,4))

player.placement(5,"shipA","Hori")
player.placement(8,"shipC","Hori")

const fire = function(x){//switch to switch
    if (player.boardstate[x] === 0){
        console.log("MISS")
        player.boardstate[x] = "O"
    }
    else if (player.boardstate[x] === "A"){
        console.log("Hit")
        player.boardstate[x] = "X"
        player.Health -=1
    }
    else if (player.boardstate[x] === "C"){
        console.log("Hit")
        player.boardstate[x] = "X"
        player.Health -=1}
    else if (player.boardstate[x]=== "X" || player.boardstate[x]==="O"){
        console.log("Already shot at, select another area")
    }
    
}//switch to switch
fire(2)
fire(2)
fire(5)
fire(5)
fire(12)
fire(8)


console.log(player.boardstate)
console.log(player.Health)
console.log(player.shipA)
//console.log(board)
/*const board2 = [0,0,0,0,0,0,0]



const whack = function(x){
    if (board2[x] === 1){
        console.log("a")
    }
    else {
        console.log("b")
    }
}
whack(3)



/*function test(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log("Element at [" + i + "][" + j + "] is: " + arr[i][j])}}
}
test(board)*/

/*function testy(arr,x,y){
    if (arr[x][y] === 3){
    console.log("hit")
    arr[x][y] = "X"
    }
    else {
        console.log("miss")
        arr[x][y] = "M" 
        }
    }
const fire = function(x,y){ 
    testy(board)
    }

fire(1,3)
fire(2,2)
fire(3,3)
fire(1,2)*/
//console.log(board)
