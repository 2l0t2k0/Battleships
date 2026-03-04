# Battleships

function u (amin,b,c){
    const randnum = Math.floor(Math.random()*(b-amin+1))+amin;
    if (randnum !== c){
        return randnum
    }
    else {
        return u (amin,b,c)    
    }
}

const fruits = ['apple', 'banana', 'mango', 'guava'];
const searchValue = 'banana';

// Check if 'banana' exists in the fruits array
if (fruits.includes(searchValue)) {
  console.log(`${searchValue} is in the array.`); // Output: banana is in the array.
} else {
  console.log(`${searchValue} is not in the array.`);
}
~~~
workingarr =   [0,1,2,3,4,5,6,7,8,
                10,11,12,13,14,15,16,17,18
                20,21,22,23,24,25,26,27,28
                30,31,32,33,34,35,36,37,38
                40
                50,
                60
                70
                80
                90]

temparr = []



const generateplacement() =>{

    //for each generated item in playerlist 
    const direction = Math.round(Math.random())//if 0, direct is hori and vice versa
    //check item's array[0], to indicate shiptype
    //depending on shiptype: 
    //   const filterset = new Set(ShipXDirect) //shipXDirect is array tailored to each shiptype and orientation
    // temparr = workingarr.filter(item => !filterSet.has(item)) 

    //code below is for vertical carrier
   
    const start = function(0,98,temparr){
    const randnum = Math.floor(Math.random()*(98-0+1))+0//randnumbetween 0 and 98
            if (temparr.includes(randnum) && temparr.includes(randnum+10) && temparr.includes(randnum+20) && temparr.includes(randnum-20) && temparr.includes(randnum-20)){
            return randnum
        }
        else {
            return start(0,98,temparr)}
        }}
   

    