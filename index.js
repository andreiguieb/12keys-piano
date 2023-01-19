let numOfKeys = document.querySelectorAll(".key").length;

for (n = 0; n < numOfKeys; n++){
    document.querySelectorAll(".key")[n].addEventListener("click", function(){
        let buttonClicked = this.innerHTML;
        keySounds(buttonClicked);
        buttonAnimation(buttonClicked);
    })
}


document.addEventListener("keypress", function(event){
    keySounds(event.key);
    buttonAnimation(event.key);
 })

function keySounds(key){
    switch(key){
        case "a":
            let cnote = new Audio ("Sounds/C1 61 key Piano.mp3");
            cnote.play();
        break;
        case "s":
            let csharp = new Audio ("Sounds/C1 Sharp & D1 Flat.mp3");
            csharp.play();
        break;
        case "d":
            let dnote = new Audio ("Sounds/D1 61 key Piano.mp3");
            dnote.play();
        break;
        case "f":
            let dsharp = new Audio ("Sounds/D1 Sharp & E1 Flat.mp3");
            dsharp.play();
        break;
        case "g":
            let enote = new Audio ("Sounds/E1 61 key Piano.mp3");
            enote.play();
        break;
        case "h":
            let fnote = new Audio ("Sounds/F1 61 key Piano (1).mp3");
            fnote.play();
        break;
        case "j":
            let fsharp = new Audio ("Sounds/F1 Sharp & G1 Flat.mp3");
            fsharp.play();
        break;
        case "k":
            let gnote = new Audio ("Sounds/G1 61 key Piano.mp3");
            gnote.play();
        break;
        case "l":
            let gsharp = new Audio ("Sounds/G1 Sharp & A1 Flat.mp3");
            gsharp.play();
        break;
        case "m":
            let anote = new Audio ("Sounds/A1 61 key Piano.mp3");
            anote.play();
        case "n":
            let asharp = new Audio ("Sounds/A1 Sharp & B1 Flat.mp3");
            asharp.play();
        break;
        case "b":
            let bnote = new Audio ("Sounds/B1 61 key Piano.mp3");
            bnote.play();
        break;
        default: console.log(innerHTML);  
    }
}
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

}