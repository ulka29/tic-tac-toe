console.log("hello world");
let music= new Audio("music.mp3");
let audioTurn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let isgameover=false;

//Function to change the turn
const changeTurn= ()=>{
    return turn==="X"?"0":"X"
}

//Function to check for a win
const checkWin = () =>{
    let boxTaxts = document.getElementsByClassName('boxTaxt');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
        if((boxTaxts[e[0]].innerText === boxTaxts[e[1]].innerText) && (boxTaxts[e[0]].innerText === boxTaxts[e[2]].innerText) && (boxTaxts[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxTaxts[e[0]].innerText + " won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector('.line').style.width="20vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game logic
//music.play()
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtaxt=element.querySelector('.boxTaxt');
    element.addEventListener('click',()=>{
        if(boxtaxt.innerText === ''){
            
            boxtaxt.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            console.log(boxtaxt.innerText)
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText ="Turn for "+turn;
            }
        }
    })
})

//add oncllick listner to reset button
reset.addEventListener('click',()=>{
    let boxTaxts = document.querySelectorAll('.boxTaxt');
    Array.from(boxTaxts).forEach(element =>{
        element.innerText=""
    });
    turn="X"
    isgameover=false
        document.getElementsByClassName("info")[0].innerText ="Turn for "+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
        document.querySelector('.line').style.width="0vw";
    
})