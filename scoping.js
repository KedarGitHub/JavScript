var Name="Kedar"
var Age=27
let salad="Onion"
var type="fruit"
const name="myName" //similar to let but like final in Java

//the above variables act as class variables and act as public of Java

function date(){
    var year=2021; //This is limited only the function, variable declared inside method/function act as method variable/local
    console.log(year)
}

date(); 
//console.log(year)
console.log(food); //this doesn't take as error as it considers as declared from below however this isn't considered as initialized
//console.log(salad); //this gives error as let is block scope

if(Age>20){

    var food="Pizza" //THIS MAKES IT GLOBAL VARIABLE, even if it is declared later, it is accessible everywhere 
    let salad="Cabbage"; //But let is used to make a variable local, only if used inside a block, outside the block it is global
    console.log(salad)
    var type="veggie" //this is same as the one declared outside so we are reinitializing
}

console.log(Name,Age,food);
console.log(salad,type);


