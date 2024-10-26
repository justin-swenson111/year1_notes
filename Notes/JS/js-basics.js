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
// if (alive){
//     console.log("alive")
// }
// let money=175
// if (money>=0 && money<=20){
//     console.log("Broke Netflix")
// }
// else if (money>=21 && money<=60){
//     console.log("Movie Theater")
// }
// else if (money>=61 && money<=80){
//     console.log("Dinner")
// }
// else{
//     console.log("Sky diving")
// }

let input1="1"
let input2=1

// console.log("comparing " +input1+ "("+typeof(input1)+") and " + input2 + "(" + typeof(input2)+")") 
// console.log('When compared with == is'+(input1==input2))
// console.log('When compared with === is ' +(input1===input2))
// console.log('When compared with Object.is is '+ Object.is(input1,input2))
// console.log("Honey I Shrunk the Kids")

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

//Comparers

let test= "Bored"
let test2 = "bored"


 let trueFalse= false
 if (trueFalse==true){
    console.log("this is true")
 }
 else{
    console.log("this is false")
 }
 let yearTest=2020
 if (yearTest==2020) console.log("uh-oh")
else if (yearTest==2021) console.log("happy new year"
)

if(true) console.log('works')
if(0) console.log('doesnt work')

let ageTest=20
let canDrink= (ageTest>=21) ? true: false;
console.log(canDrink)

let a =1
let b = 4
let check = (a+b<4) ?"result":"over";
console.log(check)

let grade=90
let letterGrade
if (grade>=90)letterGrade="A"
    else if(grade>=80)letterGrade="B"
        else if(grade>=70)letterGrade="C"
            else if(grade>=60)letterGrade="D"
                else letterGrade="F"
console.log(letterGrade)

//  && || operator
let havePen = false
let havePaper = true
let haveKeyboard = true
let haveMouse = true
if ((havePen && havePaper) || (haveKeyboard && haveMouse)) console.log("you can take notes"); console.log("hi");

// not operator
let upLate = false
let playGames = false
let studied = true
let breakfast=true
if (!upLate && !playGames && studied && breakfast)console.log("passed the test")

// nullish operator
let location = null
let geolocation;
console.log(geolocation ?? "Not a valid geo loaction")
let newLocation =  location ?? "Arizona"
console.log(newLocation)

// array and for loop test
let rndString=[];
for (let i = 0; i < 5; i++) {
    let rnd = Math.random()*100; 
    rnd = Math.round(rnd); 
    rndString[i]=rnd
};
    console.log(rndString)

for (let i =10; i>1; i--){
    console.log(i)
}
console.log("hi")
for (let i =1; i<14; i++){
    if (i%2==1 && i>4 ){
        console.log(i)
    }
}

// loop tests

console.log("test1")
for (let i=5; i<12; i++){
console.log(i)
}
for (let i=1; i<10; i++){
    console.log("this is nice")
}
for (let i=11; i>=1; i--){
    if (i%2==1){
        console.log(i)
    }
}

// while loops
console.log("while")
let j =1
let lis=["item1", "item2"]
let dict={
    "item1":["itm11", "itm12", "itm13"],
    "item2":["im21","itm22", "itm23"]
}
while(j<3){
    let option=lis[1]
    // dict.option[1]
    // console.log(dict.option[1])
    j++
}

let k = 0
do {
    console.log("do while "+k)
    k++
} while (k<3)

let classes = 12
for (let i=0; i<classes; i++){
    if (i==7){
        console.log("Eaten by 7 :'(")
        continue
    }
    console.log(i)
    console.log("This should always print")
}

outer: for (let i =0; i<3; i++){
    for (let l =0; l<6; l++){
        let input = prompt(`value at coords (${i},${l})`,'')
        if (input.length>0) break outer
    }
}
alert("done!")

