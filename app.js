//const board = [[0,0,0],
           //  [0,0,0],
          //   [0,0,0]
//]


//board[1][2] = 3
//console.log(board[2][2])
const player = {
boardstate: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
shipA: ["H","H","H"],
Health: 3,
placement(x, rotate) {
    if(rotate === "Hori"){
    this.boardstate[x] = "A"//this.ShipA[1]
    this.boardstate[x-1] = "A"//this.ShipA[0]
    this.boardstate[x+1] = "A"//this.ShipA[2]
 }
    else if (rotate === "Vert"){
        this.boardstate[x] = "A"//this.ShipA[1]
        this.boardstate[x-4]= "A"//this.ShipA[0]
        this.boardstate[x+4]= "A"//this.shipA[2]
    }
}}
//const board = []
//const WWWD = player.boardstate
//while (WWWD.length) board.push(WWWD.splice(0,4))

player.placement(5,"Hori")

const fire = function(x){
    if (player.boardstate[x] === 0){
        console.log("MISS")
        player.boardstate[x] = "O"
    }
    else if (player.boardstate[x] === "A"){
        console.log("Hit")
        player.boardstate[x] = "X"
    }
    else if (player.boardstate[x]=== "X" || player.boardstate[x]==="O"){
        console.log("Already shot at, select another area")
    }
    
}//switch to switch
fire(2)
fire(2)
fire(5)
fire(5)
fire(12)


console.log(player.boardstate)
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
