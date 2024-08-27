//console.log testing
let Name = "Justin"
let favfoods = ["Mexican", "German", "Italian"]
let age = 16
//let alive= true
console.log(Name+" " +age+" "+" "+favfoods)
//Multiline comments testing
let message = ` This is a multi-line
message using backtics`
console.log(message)
// const
//variable that cannot be changed after its creation
const lastName= "Swenson"
let result= "hired"
console.log("The person we interviewed name was: "+ lastName+ ". He was: "+result+".")
//concatenation testting
let integer =1
let string = " 3 "
let boolean = true
console.log(integer+string+boolean)
console.log(integer-string)
//if statements
let age1=23, age2=56
if (age1 > 45){
    console.log("they old")
}
else if (age1<30){
    console.log("babies am i right")
}
else{
    console.log("they are getting there")
}
let bf="Eli"
let thinksBF="AJ"
    if (bf!=thinksBF){
        console.log("You need more friends")
    }
    if (15=="15"){
        console.log("You can read")
    }
    //== converts type first then compares
    if ("15"==="15"){
        console.log("You can read")
    }
    //=== does not convert first
let alive=true
let year="2024"
let number= 7
if (alive==true && year==2024){
console.log("yay")
}
// or you could use nested
if (alive==true){
    if (year==2024){
        console.log("yay")
    }
}
//can get rid of ==true for boolean statements since they are already true or false
if (alive){
    console.log("alive")
}
let money=175
if (money>=0 && money<=20){
    console.log("Broke Netflix")
}
else if (money>=21 && money<=60){
    console.log("Movie Theater")
}
else if (money>=61 && money<=80){
    console.log("Dinner")
}
else{
    console.log("Sky diving")
}

let input1="1"
let input2=1

console.log("comparing " +input1+ "("+typeof(input1)+") and " + input2 + "(" + typeof(input2)+")") 
console.log('When compared with == is'+(input1==input2))
console.log('When compared with === is ' +(input1===input2))
console.log('When compared with Object.is is '+ Object.is(input1,input2))
console.log("Honey I Shrunk the Kids")

/*let bits= prompt("How many bits")
let bytes=alert("There are " +(bits/8)+" Bytes")
let kilobytes=alert("There are " +(bytes/1024)+" kilobytes")
let megabytes=alert("There are " +(kilobytes/1024)+" MegaBytes")
let gigabytes=alert("There are " +(megabytes/1024)+" GigaBytes")
let terabytes=alert("There are " +(terabytes/1024)+" TeraBytes")
console.log(bits+ " bits")
console.log(bytes+" bytes")
console.log(kilobytes+" Kilobytes")
console.log(megabytes+" Megabytes")
console.log(gigabytes+" Gigabytes")
console.log(terabytes+" Terabytes")*/

let x = 8542
let y = 995
function addFunction(x, y){
    console.log(x+y)
}
addFunction(x,y)

let my_name="Justin"
function nameComment(name){
    console.log(name+" youre amazing")
}
nameComment(my_name)