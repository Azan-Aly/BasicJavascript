let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const scoreuser = document.querySelector("#user")
const scorecomp = document.querySelector("#comp")

const gencompchoice = () => {
    // rock,paper,scissor
    const options = ["rock", "paper", "scissors"]
    let randno = Math.floor(Math.random() * 3);
    return options[randno];
}

const showwinner = (userwin, userchoice,compchoice )=>{
    if(userwin){
        userscore++;
        console.log("you win");
        msg.innerText = `YOU WIN! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
        scoreuser.innerText = userscore;
    }else{
        computerscore++;
        console.log("you lose");
        msg.innerText = `YOU LOSE ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
        scorecomp.innerText = computerscore;
        
    }
}

const playgame = (userchoice) => {
    console.log("User choice = ", userchoice);
    // generate computer's choice 
    const compchoice = gencompchoice();
    console.log("computer choice = ", compchoice)
    
    if (userchoice === compchoice) {
        console.log("The Game was DRAW")
        msg.innerText = "Game was DRAW"
        msg.style.backgroundColor = "blue"

    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true
        } 
        else if (userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
          userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})



