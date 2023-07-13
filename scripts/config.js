function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //  +"1" --> 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();
  
  if(!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a vaild name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  if(editedPlayer === 1) {
    players[0].name = enteredPlayerName;
  }else {
    players[1].name = enteredPlayerName;
  }
  closePlayerConfig();
}