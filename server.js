const container = document.querySelector('.container');
const divNumber = prompt("Enter number of divs in a row");
const total = divNumber ** 2;
const divs = document.createElement('div');
function divCreation(divs) {
    for (let i = 0; i < total; i++) {
        const divs = document.createElement('div');
        divs.classList.add('items');
        divs.innerHTML = "";
        divs.style.color = "black";
        divs.style.border = "2px solid white";
        divs.style.margin = "2px 2px";
        divs.style.height = "10vh";
        divs.style.width = "auto";
        container.appendChild(divs);
        divs.addEventListener("mouseenter", () => {
            divs.style.backgroundColor = "red";
        });

    }
}
divCreation(divs);


