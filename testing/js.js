let timer = 1
opacity=1
function imgCall(){
    console.log("start")
    
    setInterval(imgCycle, 1500)
}
function imgCycle(){
    var imgpath = ["https://www.awsfzoo.com/media/capy1.png", "https://cdn.pixabay.com/photo/2016/10/11/16/14/capybara-1732020_1280.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLcMW-TJelg6Rs1Y_x5kT_-nGGX9F8W-b0A&s","https://t3.ftcdn.net/jpg/04/91/78/04/360_F_491780452_Ctg5Twa1RJwJgWPBZ4ImOib4uTmMr8SL.jpg", "https://ichef.bbci.co.uk/childrens-responsive-ichef-live/976/childrens-binary-store/r/1x/cbeebies/SAAGW-Capybara-3.jpg"]


    if (timer<=3){
        timer-=1
    }
    if (timer==-1){

        fadein()


        document.getElementById("img1").src=imgpath[1]
        document.getElementById("test").innerHTML="1"
        console.log(opacity)
        timer=3
        setTimeout(fadeout,1000)
        console.log(opacity)

        
    }
    if (timer == 0){
fadein()
        document.getElementById("img1").src=imgpath[1]

        document.getElementById("test").innerHTML="2"
        console.log(opacity)
        setTimeout(fadeout,1000)

    }
    if (timer == 1){
fadein()


        document.getElementById("img1").src=imgpath[2]
        document.getElementById("test").innerHTML="3"
        console.log(opacity)
        setTimeout(fadeout,1000)

    }
    if (timer == 2){
fadein()


        document.getElementById("img1").src=imgpath[3]
        document.getElementById("test").innerHTML="4"
        console.log(opacity)
        setTimeout(fadeout,1000)


    }
}
function fadeout(){
var loopvar = setInterval(function(){
    if (opacity>0){
        opacity-=0.1
        document.getElementById("img1").style.opacity=opacity
        
    }
},100)
}
function fadein(){
    var loopvar = setInterval(function(){
        if (opacity=0){
            opacity+=0.1
            document.getElementById("img1").style.opacity=opacity
        }
    },100)
}