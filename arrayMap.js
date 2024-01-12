let array1=[1,2,3,4,5,6,7]

let array2= array1.map((element)=>{
    console.log(element)
    return element*2;
});
//The above is a function and is assigned to array2, map takes element from array1 and assigned the returned values

console.log(array2);

console.log(array1.map((element)=>{
    console.log(element)
    return element*4
}))

let array_new= array1.filter((element)=>{
    if(element>5){
        console.log(element)
        return true
    
    }
    else{
            return false
    }
})
console.log(array_new)

array1.forEach((element)=>{
    console.log(element)
})
console.log(array_new)

let value=array1.reduce((accumulator, previous)=>{
    console.log(accumulator)
    return accumulator+previous
    //accumulator=1, previous=2
    //accumulator=3, previous=3
    //accumulator=1, previous=2
},0)
console.log("Value is "+value)

let myFavFoods =["Pizza","Burger","Pasta","lasagna"]
console.log(myFavFoods.indexOf("Burger_no1"))
console.log(myFavFoods.indexOf("Burger_no1")>-1)
console.log(myFavFoods.includes("Burger_1"))


let students =[
    {
        name:"Kedar",
        age: 27
    },
    {
        name:"Akshay",
        age:28

    },
    {
        name:"Anirudh",
        age:30
    }
]

const obj= students.find(s=>{
    return s.age==27
})
console.log(obj)