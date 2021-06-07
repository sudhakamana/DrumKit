var numberOfButtons = document.querySelectorAll(".drum").length;
 
for(var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML= this.innerHTML;

        keySound(buttonInnerHTML);

        animationButton(buttonInnerHTML);
       
//this will read the button function and make sound
    } );
}

//this will be used to read the keypress and return 
document.addEventListener("keypress",function(event){
    var soundkey= event.key;
    keySound(soundkey);

    //or
    
    keySound(event.key); 

    animationButton(event.key); 

});


function keySound(key){
    
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;           

        default: console.log("buttoninnerHTML");
            break;
    }

}

// funtion for animation 

function animationButton(currentkey){
    var btnAnimation = document.querySelector("." + currentkey);

    btnAnimation.classList.add("pressed");
    
    setTimeout(function(){
        btnAnimation.classList.remove("pressed");
    } ,100);
}


//var audioPlay = new Audio("sounds/tom-1.mp3");
//       audioPlay.play();

/*creating Object var houseKeeper1 = {
    Name:"swathi",
    age: 21,
    Experience: "8 years",
    WorkInterest: ["sweeping","bedroom","bathroom"] 
}*/
