
/* Je récupère toutes mes données html et déclare mes variables*/
let images =["IMG/one-g37ddbed93_640.png", 
             "IMG/dice-g2595bb808_640.png", 
             "IMG/three-gb0a4fb5a3_640.png",
             "IMG/dice-gf2f8bf668_640.png",
             "IMG/dice-ga29ceb950_640.png",
            "IMG/dice-ga9027fdae_640.png"];
let dice = document.querySelectorAll("img");
let player1 = document.querySelector("player1");
let player2 = document.querySelector("player2");
let global_p1 = document.querySelector("global_p1");
let global_p2 = document.querySelector("global_p2");
let round_p1 = document.querySelector("round_p1");
let round_p2 = document.querySelector("round_p2");
let current = document.querySelector("#current");






function reset(){
    
};

function roll(){
    dice.forEach(function (die){
        die.classList.add("shake");
    });
setTimeout(function(){
    dice.forEach(function (die){
        die.classList.remove("shake")
        });
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);
        
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        current.innerHTML = "VOUS OBTENEZ " + (dieOneValue + 1) +  " POINTS.";
},
1000
);
}