const teamBattingAverages = [];
const teamHomeRuns = [];
const teamRunsBattedIn = [];
const teamStolenBases = [];
const teamNames = [];

const ctx = document.getElementById('teamStatsChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: teamNames,
        datasets: [
            {
                label: 'Team Batting Average',
                data: teamBattingAverages,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Team Home Runs',
                data: teamHomeRuns,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Team Runs Batted In',
                data: teamRunsBattedIn,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Team Stolen Bases',
                data: teamStolenBases,
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

const teamRows = document.querySelectorAll('tbody tr');

teamRows.forEach(row => {
    const teamName = row.children[0].innerText;
    const battingAverage = parseFloat(row.children[1].innerText);
    const hr = parseInt(row.children[2].innerText);
    const rbi = parseInt(row.children[3].innerText);
    const sb = parseInt(row.children[4].innerText);

    if (!isNaN(battingAverage)) {
        teamNames.push(teamName);
        teamBattingAverages.push(battingAverage);
    }

    if (!isNaN(hr)) {
        teamHomeRuns.push(hr);
    }

    if (!isNaN(rbi)) {
        teamRunsBattedIn.push(rbi);
    }

    if (!isNaN(sb)) {
        teamStolenBases.push(sb);
    }
});
