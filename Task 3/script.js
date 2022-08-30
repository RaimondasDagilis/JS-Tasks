/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", fetchData);
function fetchData(e) {
  e.preventDefault();
  fetch(ENDPOINT)
    .then((Response) => Response.json())
    .then((users) => {
      drawCards(users);
    });
}

function drawCards(_users) {
  let container = document.getElementById("output");
  container.innerHTML = "";
  _users.forEach((user) => {
    let card = document.createElement("div");
    let login = document.createElement("p");
    let img = document.createElement("img");
    card.className = "card";
    login.className = "login";
    img.className = "img";
    login.textContent = user.login;
    img.src = user.avatar_url;
    card.append(img, login);
    container.append(card);
  });
}
