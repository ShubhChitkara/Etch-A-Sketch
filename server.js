const container = document.querySelector(".container");
const contains = document.querySelector(".contains");
function divCreation(divNumber) {
  const dimension = 500 / divNumber;
  for (let i = 0; i < divNumber*divNumber; i++) {
      const divs = document.createElement("div");
      divs.style.border = "0px solid white";
      divs.style.height = `${dimension}px`;
      divs.style.width = `${dimension}px`;
      container.appendChild(divs);
      divs.addEventListener("mouseenter", () => {
        divs.style.backgroundColor = "red";
      });
    }
  }
divCreation(10);
const btn = document.createElement("button");
btn.textContent = "RESET";
btn.style.color = "black";
btn.style.border = "2px solid black";
btn.addEventListener("click", () => {
  const newNumber = prompt("Enter number of divs in a row");
  container.innerHTML="";
  divCreation(newNumber);
});
contains.appendChild(btn);
