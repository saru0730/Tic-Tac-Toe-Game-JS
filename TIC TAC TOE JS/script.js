var gameInfo=document.querySelector('.game-info');
var boxes=document.querySelectorAll('.box');
var newbtn=document.querySelector('.btn');


let currentplayer;
let grid;
const wP = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function initGame(){
    currentplayer='X';
    gameInfo.innerHTML=`Current player - ${currentplayer}`;
    grid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
        box.style.pointerEvents="all";
    })
    newbtn.classList.remove('active');
    gameInfo.classList.remove('gametiedani');
        

    



}
initGame();

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})
function handleClick(index){
    if(grid[index]===""){
    grid[index]=currentplayer;
    boxes[index].textContent=currentplayer;
    gameInfo.innerHTML=`Current player - ${currentplayer}`;
    swap();
    checkwinner();

    }
}

function swap(){
    if(currentplayer==="X")
    {
        currentplayer='O';
    }
    else{
        currentplayer='X';
    }
}

newbtn.addEventListener('click',initGame);

function checkwinner(){
    let answer='';
    wP.forEach(pos =>{
        if( (grid[pos[0]]!==""  &&  grid[pos[1]]!=="" &&   grid[pos[2]]!=="" )   &&  
             ( (grid[pos[0]] === grid[pos[1]]) &&  (grid[pos[1]] === grid[pos[2]])) ){

                if(grid[pos[0]]==='X'){
                    answer='X';
                }
                else{
                    answer='O';
                }
                boxes.forEach(box=>
                    {
                        box.style.pointerEvents='none';
                    })


                boxes[pos[0]].classList.add('win');
                boxes[pos[1]].classList.add('win');
                boxes[pos[2]].classList.add('win');


                newbtn.classList.add('active');
                gameInfo.textContent=`Winner Player - ${answer}`;
                gameInfo.classList.remove('gametiedani');
        }
        else{
            let count=0;
             grid.forEach(box=>{
               if(box!==""){
                    count++;    
                }
               if(count==9 && answer==="")
               {
               newbtn.classList.add('active');
               gameInfo.textContent=`Game Tied`;
               gameInfo.classList.add('gametiedani');
               }
            })
        }
    });
    
}

