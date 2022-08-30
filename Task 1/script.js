/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", calculateWeight);

function calculateWeight(e) {
  e.preventDefault();
  let weight = document.getElementById("search").value;
  if (isNummber(weight)) {
    document.getElementById("lb").textContent = `${weight * 2.2046} lb`;
    document.getElementById("g").textContent = `${weight / 0.001} g`;
    document.getElementById("oz").textContent = `${weight * 35.274} oz`;
  } else {
    alert("Only numbers are allowed!!!");
  }
}

function isNummber(_string) {
  let stringArray = _string.split("");
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  let pointFound = false;
  let result = true;
  console.log(stringArray);
  stringArray.forEach((element) => {
    if (!numbers.includes(element) || (element == "." && pointFound)) {
      result = false;
    }
    if (element == "." && !pointFound) {
      pointFound = true;
    }
  });
  return result;
}
