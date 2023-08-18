const userInputString = window.prompt(
    "Enter a list of comma-separated froyo flavors.",
    "vanilla, vanilla, strawberry, coffee, coffee"
);
const stringArray = userInputString.split(",");
const response = {};

function numOfFlavors(arr){
    for(let i = 0; i < arr.length; i++){
        const flavor = arr[i];
        if(response[flavor] === undefined){
            response[flavor] = 0;
        }
        response[flavor] = response[flavor] + 1;
    }
    return response;
}

console.log(numOfFlavors(stringArray));







