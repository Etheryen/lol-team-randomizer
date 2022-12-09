function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayPlayers(playersArray) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const team1 = playersArray.slice(0, 5);
  const team2 = playersArray.slice(5);
  const team1el = document.createElement('div');
  const team2el = document.createElement('div');
  const team1header = document.createElement('h2');
  const team2header = document.createElement('h2');
  const team1players = document.createElement('div');
  const team2players = document.createElement('div');

  team1header.innerHTML = 'Team 1';
  team2header.innerHTML = 'Team 2';
  team1players.innerHTML = `
    TOP: ${team1[0]} <br>
    JG: ${team1[1]} <br>
    MID: ${team1[2]} <br>
    BOT: ${team1[3]} <br>
    SUPP: ${team1[4]}
    `;

  team2players.innerHTML = `
    TOP: ${team2[0]} <br>
    JG: ${team2[1]} <br>
    MID: ${team2[2]} <br>
    BOT: ${team2[3]} <br>
    SUPP: ${team2[4]}
    `;

  team1el.appendChild(team1header);
  team2el.appendChild(team2header);
  team1el.appendChild(team1players);
  team2el.appendChild(team2players);
  main.appendChild(team1el);
  main.appendChild(team2el);
  main.className = 'randomTeams';
}

const form = document.querySelector('#playersForm');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const players = Array.from(form.children).filter(
    (el) => el.tagName === 'INPUT'
  );

  const playersArr = players.map((p) => p.value);

  shuffleArray(playersArr);

  displayPlayers(playersArr);
});
