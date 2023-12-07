console.log("Welcome to Tic Tac Toe");

let turnAudio = new Audio('Musics/clickAudio.wav');

let turn = 'X';
let isgameover = false;

let line = document.querySelector('.line');
line.style.width = '0px';

//Finction to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach(e => {
        if(
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== '' )
        ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won!';
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            line.style.width = '20vw';
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            isgameover = true;
        }
    });
}

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elem => {
    let boxtext = elem.querySelector('.boxtext');
    elem.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = turn +"'s Turn";
            }else {
                setTimeout(() => {
                    resetGame();
                }, 3000);
            }
        }
    });
});

//Reset 
reset.addEventListener('click', ()=>{
    resetGame();
});

function resetGame(){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(elem => {
        elem.innerText = '';
    });
    turn ='X';
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = turn +"'s Turn";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    line.style.width = '0px';
}