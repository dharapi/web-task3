let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn =document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let tuurno =true;//paly o
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame =() =>{
    tuurno =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",()=> {
       
        if(tuurno){
            box.innerText="O";
            tuurno =false;
        } else{
            box.innerText="X";
            tuurno =true;   
        }
        box.disabled =true;
        checkWinner();

    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showwinner =(winner) => {
    msg.innerText =`congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(patten of winPatterns)
    {
        let pos1val =boxes[patten[0]].innerText;
        let pos2val =boxes[patten[1]].innerText;
        let pos3val =boxes[patten[2]].innerText; 

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val ) {
               

                showwinner(pos1val);
            }
        }
    }
 
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
