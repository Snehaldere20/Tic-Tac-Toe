let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebin=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg");
let msg=document.querySelector("#one")

let turn0=true;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("boc was click");
       if(turn0){
        box.innerText="O";
        box.classList.add("o");
        turn0=false;

       }
       else{
        box.innerText="X";
        box.classList.add("x");
        turn0=true;
       }
       box.disabled=true;// you can disable this also
       checkwinner();
    });
});
const disabledbtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText= `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
}
const checkwinner=()=>{
    for ( let pattern of winPatterns){
     let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val!="" && pos3val !=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
            }
        }
    } ;
}

const restgame=()=>{
    turn0=true;
    enabledbtns();
    msgcontainer.classList.add("hide");
    boxes.forEach((box)=>{
        box.classList.remove('x','o');
    });

};

newgamebin.addEventListener("click",restgame);
resetbtn.addEventListener("click",restgame);