//Chrome uses V8
//alert, prompt, confirm 
alert({myName:"Kedar"});                                               //it just gives message
let variable=confirm("Are you sure, if u wanna delete it?");           //confirm gives you optio yes and no
console.log(variable);
let value=prompt("Enter the values");                                  //prompt gives you option to type
console.log(value);

var myObject = {a:1,b:2,c:3}

if(a in myObject){
    console.log("Present")
}
else{
    console.log("Not Present")
}