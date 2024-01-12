const button = document.querySelector("button"); //can be only done for button or inpur etc. not values
const output = document.querySelector(".output")
console.log(button, output)
button.addEventListener("click", () => {
    console.log("Click")
    let choice = document.getElementById("choice").value
    let value_entered_1 = parseInt(document.getElementById("numb1").value)
    let value_entered_2 = parseInt(document.getElementById("numb2").value)
    console.log(value_entered_1,value_entered_2)
    console.log(typeof(value_entered_2))
    console.log(typeof(value_entered_1))
    switch (choice) {
        case "add":
            output.innerText = "The sum is :" + (value_entered_1 + value_entered_2);
            break;
        case "sub":
            output.innerText = "The difference is :" + (value_entered_1 - value_entered_2);
            break;
        case "mul":
            output.innerText = "The product is :" + (value_entered_1 * value_entered_2);
            break;
        case "divide":
            if(value_entered_2==0){
                output.innerText = "Second number is Invalid now changed to 1, The Quotient is :" + (value_entered_1 / 1);
            }
            else{
                output.innerText = "The Quotient is :" + (value_entered_1 / value_entered_2);
            }
            output.innerText = "The Quotient is :" + (value_entered_1 / value_entered_2);
            break;
        case "remain":
            if(value_entered_2==0){
                output.innerText = "Second number is Invalid now changed to 1, The Remainder is : 0";
            }
            else{
                output.innerText = "The remainder is :" + (value_entered_1 % value_entered_2);
            }
            break;
        default:
                break;
    }
})

