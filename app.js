const battingAverages = [];
const homeRuns = [];
const runsBattedIn = [];
const stolenBases = [];
const playerNames = [];

const ctx = document.getElementById('playerStatsChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: playerNames,
        datasets: [
            {
                label: 'Batting Average',
                data: battingAverages,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Home Runs',
                data: homeRuns,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Runs Batted In',
                data: runsBattedIn,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Stolen Bases',
                data: stolenBases,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const rows = document.querySelectorAll('tbody tr');

rows.forEach(row => {
    const playerName = row.children[1].innerText;
    const battingAverage = row.children[7].innerText;
    const hr = row.children[8].innerText;
    const rbi = row.children[9].innerText;
    const sb = row.children[10].innerText;

    if (battingAverage !== '-') {
        playerNames.push(playerName);
        battingAverages.push(parseFloat(battingAverage.slice(1)));
    }

    if (hr !== '-') {
        homeRuns.push(parseInt(hr));
    }

    if (rbi !== '-') {
        runsBattedIn.push(parseInt(rbi));
    }

    if (sb !== '-') {
        stolenBases.push(parseInt(sb));
    }
});
