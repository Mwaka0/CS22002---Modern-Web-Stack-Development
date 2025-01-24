const players = [
    { name: "Alice", score: 150,},
    { name: "Bob", score: 160},
    { name: "Charlie", score: 135 }
];

/**
 * Adds the player data to the leaderboard table
 * @param {*} data 
 */
function populateLeaderboard(data) {
    const table = document.getElementById('leaderboard'); // Access the table

    table.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `; // Reset table header

    data.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.indexOf(player) + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        table.appendChild(row);
    });
}

/**
 * Sorts the players by score in descending order
 */
function sortPlayersByScore() {
    players.sort((a, b) => b.score - a.score);
    populateLeaderboard(players);
}

/**
 * Adds a player to the leaderboard
 */
function addPlayer() {
    const name = document.getElementById('playerName').value;
    const score = document.getElementById('playerScore').value;

    if (name && !isNaN(score)) {
        players.push({ name, score });
        sortPlayersByScore();
    } 
    else {
        alert('Please enter a valid name and score');
        console.error('Invalid input');
    }
}

/**
 * Filters the leaderboard based on the score range
 */
function filterLeaderBoard() {
    const minScore = document.getElementById('minScore').value;
    const maxScore = document.getElementById('maxScore').value;

    if (!isNaN(minScore) || !isNaN(maxScore)) {
        const filteredPlayers = players.filter(player => player.score >= minScore && player.score <= maxScore);
        populateLeaderboard(filteredPlayers);
    }
    else {
        alert('Please enter a valid score range');
        console.error('Invalid input');
    }
}

sortPlayersByScore(); // Initial sort