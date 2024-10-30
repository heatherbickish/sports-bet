console.log('ya buddy')

let bank = 100
let team1Skill = 0
let team2Skill = 0
// #region  STATE🗃️--------

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const teamOneElem = document.getElementById('team-1')
const teamTwoElem = document.getElementById('team-2')
const bankElem = document.getElementById('bank')

// #endregion --------

// #region --LOGIC🧠-----


// #endregion





function draftPlayers() {
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    let switchPlayers = Math.ceil(Math.random() * 2)
    player.teamNumber = switchPlayers
    // console.log(player)
  }
  drawTeamOneEmojis()
  drawTeamTwoEmojis()
}

function betTeam1() {
  calculateTeam1Skill()
  calculateTeam2Skill()

  console.log(`Team 1: ${team1Skill} | Team 2: ${team2Skill}`);

}

function betTeam2() {
  calculateTeam1Skill()
  calculateTeam2Skill()

  console.log(`Team 1: ${team1Skill} | Team 2: ${team2Skill}`);



}

function calculateTeam1Skill() {
  team1Skill = 0
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 1) {
      team1Skill += player.skill
      console.log(team1Skill)
    }
  }
}
function calculateTeam2Skill() {
  team2Skill = 0
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 2) {
      team2Skill += player.skill
      console.log(team2Skill)
    }
  }
}
// function bank1() {
//   if (team1Skill > team2Skill) {
//     team1Skill += 25
//     bankElem.innerText += team1Skill
//   }
// }
// bank1()

// function bank2() {
//   if (team2Skill > team1Skill) {
//     team2Skill += 25
//     bankElem.innerText += team2Skill
//     console.log(team2Skill)
//   }
// }
// bank2()





// #region --GRAPHICS AND VISUALIZERS🎨---

function drawTeamOneEmojis() {
  teamOneElem.innerHTML = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 1) {
      teamOneElem.innerHTML += `<span>${player.emoji}</span>`
      // console.log(players[i])
    }
  }
}
drawTeamOneEmojis()

function drawTeamTwoEmojis() {
  teamTwoElem.innerHTML = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == 2) {
      teamTwoElem.innerHTML += `<span>${player.emoji}</span>`
      // console.log(players[i])
    }
  }
}
drawTeamTwoEmojis()




// #endregion
