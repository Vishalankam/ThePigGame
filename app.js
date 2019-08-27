/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//document.querySelector('#current-'+activePlayer).textContent= dice;
//var vis= document.querySelector('#current-'+activePlayer).textContent;
//document.querySelector('#current-1').innerHTML= '<em>'+dice+'</em>';
//console.log(vis);




var scores, dice2,dice, activePlayer, roundScore, gameIsPlaying,previous;

function initialize (){
scores=[0,0];
activePlayer =0;
roundScore=0;
    gameIsPlaying=0;
    previous =0;
document.getElementById('current-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.querySelector('#dice-1').style.display= 'None';
    document.querySelector('#dice-2').style.display= 'None';
    var player1 = prompt('enter the name of 1st player');
    var player2 = prompt('enter the name of 2nd player');
    
    document.querySelector('#name-0').textContent=player1;
    document.querySelector('#name-1').textContent= player2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel ').classList.remove('active');
      document.querySelector('.player-0-panel ').classList.add('active');
      document.querySelector('.player-1-panel ').classList.remove('active');
}

initialize();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gameIsPlaying){
        
    }
    else{
       
    dice = Math.floor(Math.random()*6+1);
      dice2 = Math.floor(Math.random()*6+1);
        
        console.log('dice '+dice);
         console.log('previous '+previous);
        if (dice==6 && previous ==6)
            {
                scores[activePlayer]=0;
                document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
                changePlayer(activePlayer); 
                previous =0;
                console.log('2 6\'s')}
        else {
           previous=dice;
           
    
    document.querySelector('#dice-1').style.display= 'block';
              document.querySelector('#dice-2').style.display= 'block';
            document.querySelector('#dice-1').src = 'dice-'+dice+'.png';
            document.querySelector('#dice-2').src = 'dice-'+dice2+'.png';
    
    
    if (dice != 1 && dice2 != 1){
        roundScore += dice+dice2;
        document.querySelector('#current-'+activePlayer).textContent= roundScore;
        
    }
    else {
        changePlayer(activePlayer);
                
    }
        }
    }
})
 document.querySelector('.btn-hold').addEventListener('click',function(){
         if (gameIsPlaying){}
    
     else {
        scores[activePlayer] += roundScore;
        
     document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
         var input = document.querySelector('.final-score').value;
         var winningScore;
         if (input)
             {
                 winningScore= input;
                 
             }
         else 
             {
                 winningScore=100;
             }
     
     if (scores[activePlayer] >= winningScore)
         {
             document.querySelector('#name-'+activePlayer).textContent='WINNER';
             document.querySelector('.dice').style.display= 'none';
             document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
             document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
             gameIsPlaying=1;
         }
     else 
         changePlayer(activePlayer);
     
     }  })

document.querySelector('.btn-new').addEventListener('click',function(){
    initialize();
})





function changePlayer( player)
{
      document.querySelector('#current-'+player).textContent= 0;
   
    roundScore =0;
    if (player==1)
        {activePlayer=0}
    else 
        activePlayer=1;
   
    
    document.querySelector('.player-0-panel ').classList.toggle('active');
    document.querySelector('.player-1-panel ').classList.toggle('active');
    document.querySelector('#dice-1').style.display='none';
       document.querySelector('#dice-2').style.display='none';
}












































































