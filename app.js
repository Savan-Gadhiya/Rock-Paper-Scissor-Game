console.log('Stone Paper Scissor');
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const rock_img = document.getElementById('rock');
const paper_img = document.getElementById('paper');
const scissor_img = document.getElementById('scissor');
const resultText_p = document.getElementById('ResultText');
let userScore = 0;
let computerScore = 0;
let timeOut; //For stop set time out Excecution
let Item_arr = ['rock','paper','scissor'];
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;

rock_img.addEventListener('click',findChoice);
paper_img.addEventListener('click',findChoice);
scissor_img.addEventListener('click',findChoice);

let ComputerChoice =  () => Math.round(Math.random()*2);


function findChoice(e){
    // console.log(e.target);
    let User = e.target.id;
    let idx = ComputerChoice();
    let Computer = Item_arr[idx];
    // console.log(User,Computer);
    result(e,User,Computer)
}

function result(e,user,computer){
    let str = user[0]+computer[0];
    // console.log(str);
    switch(str){
        case 'rs':
        case 'pr':
        case 'sp':
            userScore++;
            display(e,user,computer,"win");
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            computerScore++;
            display(e,user,computer,"loss");
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            display(e,user,computer,"draw");
            break;
    }
}

function display(e,user,computer,status){
    clearTimeout(timeOut);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let str="";
    let smallUser = "(User)".fontsize(3).sub();
    let smallComputer = "(Computer)".fontsize(3).sub();
    // console.log(smallUser,smallComputer);
    switch(status){
        case "win":
            str = `You Win !! ${user} ${smallUser} Beat ${computer} ${smallComputer}`;
            break;
        case "loss":
            str = `Opps!! You Loss ${computer} ${smallComputer} Beat ${user} ${smallUser}`;
            break;
        case "draw":
            str = `Match Draw !! Your choice ${user} and Computer choice ${computer}`;
            break;
    }   
    e.target.classList.add(status);
    resultText_p.innerHTML = str;
    setTimeout(()=>{
        e.target.classList.remove(status);
    },1500)
    timeOut = setTimeout(()=>{
        // resultText_p.classList
        resultText_p.innerHTML = '';
    },5000);
    // console.log(timeOut);
}