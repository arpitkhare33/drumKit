for(var i = 0; i <document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
    
}


document.addEventListener("keypress",handleKey);
function handleKey(event){
    // alert("Key pressed"+event.key);
    switch (event.key) {
        case 'w':
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        case 'k':
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break; 
        case 'l':
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break; 
        default:
            console.log(this.innerHTML);
            break;
    }

}

function handleClick(){
    // alert("I got clicked")
    // document.querySelector("button")
    console.log(this.innerHTML);
    var buttonInnerHtml= this.innerHTML;
    switch (buttonInnerHtml) {
        case 'w':
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        case 'k':
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break; 
        case 'l':
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break; 
        default:
            console.log(this.innerHTML);
            break;
    }

}