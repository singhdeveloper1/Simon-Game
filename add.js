let gameSeq=[]
let userSeq=[]

let btns=["red","yellow","green", "purple"]

let started =  false
let level =0;

let h2=document.querySelector("h2")
let Start = document.querySelector(".start")

Start.addEventListener("click",function(){
    if(started==false){
        started=true
        levelup()
    }
})

// document.addEventListener("keypress", function(){


//     if(started==false){
        
//         started=true
//         levelup()
//     }
// })

function btnFlash(btn){
    btn.classList.add("flash")
    
    setTimeout(function(){
        btn.classList.remove("flash")

    },280)
}

function levelup(){
    userSeq=[]
    level++

    h2.innerText=`level ${level}` 

    let randIdx=Math.floor(Math.random()*3)
    let randColor=btns[randIdx]
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    
    btnFlash(randBtn)
} 

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){

        if(userSeq.length==gameSeq.length)
        setTimeout(levelup,1000)
    }
    else{
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br><br>click <span>START</span> to start the Game`

        highest()

        document.querySelector("body").style.background="red"
        setTimeout(function(){
            document.querySelector("body").style.background="white"
        },150)
        reset()
    }

}

function btnPress(){
   let btn=this
   btnFlash(btn)
   userColor = btn.getAttribute("id")
   userSeq.push(userColor)

   checkAns(userSeq.length-1)

}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    max=level
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
    
}
let max=0;
let body=document.querySelector("body")
let high= document.createElement("h2")
high.classList.add("new")

high.innerText="High Score : 0"
body.appendChild(high)

function highest(){
    if(level>max){
        high.innerText=`high score : ${level}`
    }
}

