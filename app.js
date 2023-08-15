document.addEventListener('DOMContentLoaded', function () {
    fetch('/teams')
        .then(response => response.json())
        .then(data => {
            let teamList = document.getElementById('team-list');
            data.forEach(team => {
                let listItem = document.createElement('li');
                listItem.textContent = team.name;
                teamList.appendChild(listItem);
            });
        });
    // Similarly fetch and display players and games
});
