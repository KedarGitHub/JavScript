let obj={
    "name" :"Kedar",
    age:27,
    city:"Karwar",
    isLearningJs : true,
}
console.log(obj.name)
console.log(obj)
obj.isLearningJs=undefined
console.log(obj)
delete(obj.isLearningJs)
console.log(obj)

const place={
    "city" :"Karwar",
    country:"India",
    state:"Karnataka",
    continent : "Asia",
}
//console.log(place.city)

place.continent="Europe" //only place is constant/final not the keys 
console.log(place)