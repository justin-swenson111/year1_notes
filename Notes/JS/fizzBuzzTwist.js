let start= prompt("where do you want to start")
let length= prompt("how long")
let fizz =0
let buzz =0
let fizzbuzz =0
for (let i =start; i<=length; i++){
    // uses user inputted length
switch (true){
    case i%3==0 && i%5 ==0:
        console.log("fizzBuzz")
        fizzbuzz++
        break
        // if it is divisble by 3 and 5
    case i%3 ==0:
        console.log("fizz")
        fizz++
        // divisible by 3
        break
    case i%5 ==0:
        console.log("buzz")
        buzz++
        // divisible by 5
        break
    default:
        console.log(i)

}
}
console.log("Fizz appeared " + fizz)
console.log("Buzz appeared " + buzz)
console.log("FizzBuzz appeared " + fizzbuzz)