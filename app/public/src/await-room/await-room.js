const playerArr = JSON.parse(sessionStorage.getItem("playerArr"));
// const playerName = localStorage.getItem("username");

console.log(playerArr.players);
// console.log(playerName);

let userList = document.getElementById("user-list");

if (userList) {
  playerArr.players.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    userList.appendChild(li);
  });
}

// function removePlayer(name) {
//   const found = playerArr.findIndex((username) => username === name);

//   playerArr.splice(found, 1);

//   return playerArr;
// }

// const btn_back = document.getElementById("btn_back");
// if (btn_back) {
//   btn_back.addEventListener("submit", removePlayer(connData.userInput.value));
// }
