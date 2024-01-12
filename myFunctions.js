function printHundred(message,logger="Kedar"){ //here default value for logger is Kedar i.e if nothing is passed.
    //all of the code
    console.log(logger)
    alert(message);

    return message+logger
}

function printMessage(message,logger="Kedar"){
    //all of the code
    console.log(logger)
    alert(message);

    return function(){
        console.log("End of anonymous")
    }
}

var a=[1,2,3,4,5,6]
var b= "1,2,3,4,5,6"
console.log(a==b) //converts the type into String(using toString    ) and compares
console.log(a===b) //compares the type, if not equal then false,if type are same and values equal, then it checks the memory location
console.log(window.a)


let result=printHundred("Entry to the functions","This is logged inside the console");
console.log(result)
let result1=printHundred("Entry to the functions",11061994);
console.log(result1)
let result2=printMessage(1000) //second variable is undefined ,if we want default value set second variable to some value
console.log(result2) 

let element= document.getElementById("name")
element.onclick= function(){
    document.getElementById("name2").innerText="This is changed now to something else , duh!"
}

function change(){
    document.getElementById("name1").innerText="This is changed now to something else , duh!"
}