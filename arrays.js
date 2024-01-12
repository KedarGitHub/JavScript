//special construct of objects
//they have several functions along with Array

let array=[1,2,3,"Kedar"]
let number=200
console.log(array)
console.log(array.length)
array[4]="wow"
array[6]="nothing"
console.log(array)
console.log(array[5])
array[100]="doen"
console.log(array.length,array)

var x=1;
while(true){
    if(x==27){
        break;
    }
    console.log(x)
    x++
}

for(let i=0;i<array.length;i++){
    let count=0
    for(let j=2;j<i;j++){
    if(i%j==0){
        count++
    }
    }
    if(count==0 && array[i]==undefined){
        array[i]=i;
    }
    else{
        continue;
    }
}
console.log(array)
console.log(number++)


//also switch,math operators,increment,decrement,and and OR, exactly similar to Java