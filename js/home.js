//Challenge 3 Rock, Paper, Scissors

function rpsGame(yourChoice){
console.log(yourChoice);
let humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numTberoChoice(ranToRpsInt());
console.log('Computer choice:' + botChoice);
results = desideWinner(humanChoice, botChoice);
console.log(results);
message = finalMessage(results);
console.log(message);
rspFrontEnd(yourChoice.id, botChoice, message);
}

function ranToRpsInt(){
    return Math.floor(Math.random()*3);
    
}

function numTberoChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function desideWinner(yourChoice, computerChoice){
    let rpsData = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    let yourScore = rpsData[yourChoice][computerChoice];
    let computerScore = rpsData[computerChoice][yourChoice];
    return yourScore, computerScore;
}

function finalMessage(yourScore, computerScore){
if(yourScore === 0){
    return {'message': 'You win', 'color': 'green'};
}else if(yourScore === 0.5){
        return {'message': 'You draw', 'color': 'yellow'};
}else{
    return {'message': 'You lose', 'color': 'red'};
}
}

function rspFrontEnd(humanChoiceImg, BotChoiceImg, finalMessage){
     imgDataBase = {
         'rock': document.getElementById('rock').src,
         'paper': document.getElementById('paper').src,
         'scissors': document.getElementById('scissors').src
     }

     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();

     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var messageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='" + imgDataBase[humanChoiceImg]  + "' height=150 width=300 >"

     document.getElementById('flex-box-rps').appendChild(humanDiv);
}