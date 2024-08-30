let  a=1223;
console.log(a);
let name="Senthil";
console.log(name);
console.log(`My name is ${name}`);

function setUser(playermove){

    let moves=['rock','paper','scissors'];
    let computermove = moves[Math.floor(Math.random() * moves.length)]
    

if(playermove===computermove){
    alert("Its a Tie");
}
else if(playermove==='rock'){
    if(computermove==='paper'){
        console.log('You Lose');
    }
    else{
        console.log('You Win');
    }
}else if(playermove==='paper'){
    if(computermove==='scissors'){
        console.log('You Lose');
    }
    else{
        console.log('You Win');
    }
}else if(playermove==='scissors'){
    if(computermove==='rock'){
        console.log('You Lose');
    }
    else{
        console.log('You Win');
    }
}
}