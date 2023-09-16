let green = $('.green');
let red = $('.red');
let yellow = $('.yellow');
let blue = $('.blue');



green.on('click', ()=>{
    let audioGreen = new Audio("./sounds/green.mp3")
    audioGreen.play();
    green.addClass('pressed')

    setTimeout(()=>{
        green.removeClass('pressed')
    },100)
})

red.on('click', ()=>{
    let audioRed = new Audio("./sounds/red.mp3")
    audioRed.play();
    red.addClass('pressed')

    setTimeout(()=>{
        red.removeClass('pressed')
    },100)
})

yellow.on('click', ()=>{
    let audioYellow = new Audio("./sounds/yellow.mp3")
    audioYellow.play();
    yellow.addClass('pressed')

    setTimeout(()=>{
        yellow.removeClass('pressed')
    },100)
})

blue.on('click', ()=>{
    let audioBlue = new Audio("./sounds/blue.mp3")
    audioBlue.play();
    blue.addClass('pressed')

    setTimeout(()=>{
        blue.removeClass('pressed')
    },100)
})




