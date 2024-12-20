function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    console.log('Looking for ', playerName);
    //console.log(game);
    for(const gameKey in game){
        const team = game[gameKey];
        const players = team['players'];
        //console.log(players);

        for (const name in players) {
            if(name === playerName) {
                //console.log(typeof name);
                const player = players[name];
                return player.points;
            }
        }
    }
}


function shoeSize(playerName) {
    const game = gameObject();
    console.log('Looking for ', playerName);
    for(const gameKey in game){
        const team = game[gameKey];
        const players = team['players'];
        //console.log(players);
        
        for (const name in players) {
            if(name === playerName) {
                //console.log(typeof name);
                const player = players[name];
                return player.shoe;
            }
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    console.log('Looking for ', teamName);
    for(const gameKey in game){
        const team = game[gameKey];
        //console.log(team);
        if(team.teamName === teamName) {
            return team.colors;  
        }

    }
}

function teamNames() {
    const game = gameObject();
    const teamArray = [];
    for(const gameKey in game) {
        const team = game[gameKey];
        const names = team.teamName;
        teamArray.push(names);
    }
    return teamArray;
}

function playerNumbers(teamName) {
    const game = gameObject();
    const jerseyNum = [];
    console.log(`Looking for: ${teamName}`);
    for (const gameKey in game) {
        const team = game[gameKey];
        const players = team['players'];
        
        if (team.teamName === teamName) {
            for (const player in players) {
                const num = players[player];
                const playerNumber = num.number;
                jerseyNum.push(playerNumber);
            }
        }
    }
    return jerseyNum;
}

function playerStats(playerName) {
    const game = gameObject();
 
    for(const gameKey in game){
        const team = game[gameKey];
        const players = team['players'];
        //console.log(players);
        
        for (const name in players) {
            if(name === playerName) {
                //console.log(typeof name);
                const player = players[name];
                return player;
            }
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let rebounds = 0;
    let maxShoeSize = 0;

    for (const gameKey in game) {
        const teams = game[gameKey];
        const players = teams['players'];
        
        for (const playerKey in players) {
            const player = players[playerKey];
            //console.log(player.shoe);
        
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = null;

    for (const gameKey in game) {
        const teams = game[gameKey];
        const players = teams['players'];
        
        for (const playerKey in players) {
            const player = players[playerKey];
            
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    //Help calculate the total points
    function totalTeamPoints(players) {
        return Object.values(players).reduce((total, player) => total + player.points, 0);
    }

    const homePoints = totalTeamPoints(game.home.players);
    const awayPoints = totalTeamPoints(game.away.players);

    if(homePoints > awayPoints) {
        return `The winning team is ${game.home.teamName} with ${homePoints} points`;
    } else {
        return `The winning team is ${game.away.teamName} with ${awayPoints} points`;
    }
}

function playerWithLongestName() {
    const game = gameObject();

    let longestName = '';
    let longestNamePlayer = null;

    function checkPlayers(players) {
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
                longestNamePlayer = {
                    name: playerName,
                    steals: players[playerName].steals
                };
            }
        }
    }
    checkPlayers(game.home.players);
    checkPlayers(game.away.players);

    //Nested function to check if the player with the longest name has the most steals
    function doesLongNameStealATon() {
        let maxSteals = 0;

        function findMaxSteals(players) {
            for (const playerName in players) {
                if (players[playerName].steals > maxSteals) {
                    maxSteals = players[playerName].steals;
                }
            }
        }

        findMaxSteals(game.home.players);
        findMaxSteals(game.away.players);

        return longestNamePlayer === maxSteals;
    }
    const stealsResponse = doesLongNameStealATon();
    
    console.log(`The player with the longest name is ${longestNamePlayer.name} and it is ${stealsResponse} that he has the most steals.`);
    
    return stealsResponse;
}



//numPointsScored("Brendan Hayword");
//shoeSize('Ben Gordon');
//teamColors('Brooklyn Nets');
//teamNames();
//playerNumbers('Brooklyn Nets');
//playerStats('Ben Gordon');
//bigShoeRebounds();
//mostPointsScored();
//winningTeam();
//playerWithLongestName();
//playerWithLongestName();




