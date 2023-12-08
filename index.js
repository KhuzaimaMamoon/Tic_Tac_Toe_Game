let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let new_game= document.querySelector(".newgame");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg")
let turnO=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msg_container.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText="o";
            turnO=false;
        }
        else{
            box.innerText="x";
            turnO=true;

        }
        box.disabled=true;
        checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }

}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for (  let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val !=="" && pos2val !=="" && pos3val){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }

        }

    }
}
new_game.addEventListener("click",resetgame)
reset_btn.addEventListener("click",resetgame)