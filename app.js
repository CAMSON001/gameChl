let greenBtn = $('.green')
let redBtn = $('.red')
let yellowBtn = $('.yellow')
let blueBtn = $('.blue')
let audioGreen = new Audio("./sounds/green.mp3");
let audioRed = new Audio("./sounds/red.mp3");
let audioYellow = new Audio("./sounds/yellow.mp3");
let audioBlue = new Audio("./sounds/blue.mp3");
let level = 5

/* 
let clickTime = 0
let randomIndex = Math.floor(Math.random() * btn.length)
let randomBtn = btn[randomIndex]
let randomNumberTime = Math.floor(Math.random() * level+1) */



function buttonObject(ObjectQuery, audioUrl, timePressed) {
  
    this.ObjectQuery = ObjectQuery;
    this.audioUrl = audioUrl;
    this.timePressed = timePressed;


    this.play = function () {
        this.audioUrl.play()
    };
    this.increment = function () {
        this.timePressed++
    };
    this.discrement = function () {
        this.timePressed--
    };
    this.init = function () {
        this.timePressed= 0 
    };
}


green = new buttonObject(greenBtn,audioGreen,0 )
red = new buttonObject(redBtn,audioRed,0 )
yellow = new buttonObject(yellowBtn,audioYellow,0 )
blue = new buttonObject(blueBtn,audioBlue,0 )
let allBtns = [green,red,yellow,blue]




greenBtn.on("click", ()=>{
    audioGreen.play();
    btnAnimation(greenBtn);
    setTimeout(()=>{
        indicator()
    }, 1000)
})

redBtn.on("click", ()=>{
    audioRed.play();
    btnAnimation(redBtn);
})

yellowBtn.on("click", ()=>{
    audioYellow.play();
    btnAnimation(yellowBtn);
})

blueBtn.on("click", ()=>{
    audioBlue.play();
    btnAnimation(blueBtn);
})

        
function btnAnimation(btn) {
    btn.addClass('pressed');

    setTimeout(function() {
        btn.removeClass('pressed');
    }, 100);
}



function indicator(){
    for(let i=1; i<Math.floor(Math.random() *level +1); i++){
        let index = Math.floor(Math.random() * allBtns.length)
        setTimeout(()=>{
            for(let j=1; j<Math.floor(Math.random() * level+1); j++){
            allBtns[index].ObjectQuery.addClass('pressed');
            setTimeout(function(){
                allBtns[index].ObjectQuery.removeClass('pressed');
            },100)
            allBtns[index].audioUrl.play()
            allBtns[index].increment()
        }
        },1000)
        
    } 
}
