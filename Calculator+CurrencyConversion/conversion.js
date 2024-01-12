const button = document.querySelector("button")
const output = document.querySelector(".output")

button.addEventListener("click", () => {
    const unit = document.getElementById("currency").value
    const value = document.getElementById("value").value
    if (unit == "usd") {
        output.innerText = "The cost of " + value + " dollar/s is " + value * 73.25 + " Rupees"
    } else if (unit == "aud") {
        output.innerText = "The cost of  " + value + " Australian dollar/s is " + value * 57.47 + " Rupees "
    } else if (unit == "cd") {
        output.innerText = "The cost of  " + value + " Canadian dollar/s is " + value * 60.36 + " Rupees"
    } else if (unit == "eu") {
        output.innerText = `The cost of  ${value} Euro/s is ${value * 89.10}  Rupees` //this is formatting
    } else {
        output.innerText = "Invalid Input"
    }
    console.log(value, unit, output)
})