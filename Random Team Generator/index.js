
function RandomTeam(){
    let PlayerNames = document.getElementById("TextField").value;
    let PlayerA = document.getElementById("PlayersA");
    let PlayerB = document.getElementById("PlayersB");
    PlayerNames = PlayerNames+" ";

    let Players = [];
    let TeamA = [];
    let TeamB = [];
    
    let playerIndex = 0;
    let start = 0

    for(let player of PlayerNames){
        
        playerIndex += 1;

        if(player === " "){
            let NewPlayer = PlayerNames.slice(start,playerIndex)
            Players.push(NewPlayer);
            start = playerIndex;    
        }
    }

    const PlayerCount = Players.length;
    let Randomizer;
    let Numbers = [];

    for(i=0; i <= PlayerCount - 1 ; i++){     
        Randomizer = Math.floor(Math.random() * PlayerCount);
        
        if(!Numbers.includes(Randomizer)){
            TeamA.push(Players[Randomizer]);
            Numbers.push(Randomizer);
        }
        else{
            i--;
        }
    }

    for(i=0; i < PlayerCount / 2; i++){
        TeamB.push(TeamA[i]);
    }
    for(i=0; i< PlayerCount / 2;i++){
        TeamA.shift();
    }

    PlayerA.textContent = TeamA.join(', ');
    PlayerB.textContent = TeamB.join(', ');
}