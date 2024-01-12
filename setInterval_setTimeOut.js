console.log("Program Starts")

setTimeout(()=>{ //function to set delay only once
    document.getElementById("name").innerText= "This is changed";
},2000)
//First argument is a function ehich executes after a delay of 2 seconds

var i=0;
let id=setInterval(()=>{ //generates a counter
    document.getElementsByClassName("header")[0].innerText= ++i;
    if(i==100){
        clearInterval(id)
    }
},100)

console.log(id)

console.log("Program Ends")