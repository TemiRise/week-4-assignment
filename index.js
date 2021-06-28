// task 1
let admin;
let guest;
guest = "John"
admin = guest;
console.log(admin)

// Task 2
for(let i = 1; 1<=100; i++){

}

// Task 3
function min(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}
console.log(min(2,5))

// Task 4
let arr = []
for(let i = 0;i<arr.length;i++){
    if(arr[i] % 3 === 0 && arr[i] % 5===0){
        arr[i] = "FizzBuzz"
    }
    else if(arr[i] % 5===0){
        arr[i] = "Buzz"
    }
    else if(arr[i] % 3 ===0){
        arr[i] = "Fizz"
    }
    else{
        arr[i] = arr[i]
    }
    console.log(arr[i])
}