/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((Response) => Response.json())
  .then((cars) => {
    drawCards(cars);
    console.log(cars);
  });

function drawCards(_cars) {
  let container = document.getElementById("output");
  container.innerHTML = "";
  _cars.forEach((car) => {
    let card = document.createElement("div");
    let cardHeader = document.createElement("p");
    let cardFooter = document.createElement("p");
    let ul = document.createElement("ul");
    car.models.forEach((model) => {
      let li = document.createElement("li");
      li.textContent = model;
      ul.append(li);
    });
    card.className = "card";
    cardHeader.className = "cardHeader";
    cardFooter.className = "cardFooter";
    cardHeader.textContent = car.brand;
    cardFooter.append(ul);
    card.append(cardHeader, cardFooter);
    container.append(card);
  });
}
