let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcnt");
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showwinner = (winner) => {
    console.log(`Winner is: ${winner}`);  // Debugging
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const disbtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkDraw = () => {
    const filled = Array.from(boxes).every(box => box.innerText !== "");
    if (filled) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disbtns();
    }
};

function checkwinner() {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        console.log(`Checking pattern: ${pattern}, pos1: ${pos1val}, pos2: ${pos2val}, pos3: ${pos3val}`); // Debugging

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner found: ", pos1val); // Debugging
                disbtns();
                showwinner(pos1val);  // Pass the winner symbol
                return;
            }
        }
    }
    checkDraw();
}

const resetgame = () => {
    turno = true;
    enabtns();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
