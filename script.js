let container = document.getElementById("container");

let divArr = [];

for(let i = 0; i < 30; i++) {
    divArr[i] = document.createElement("div");
    divArr[i].classList.add("square")
    divArr[i].addEventListener("mouseover", function() {
        divArr[i].style.backgroundColor = "blue";
    });
    container.appendChild(divArr[i]);
}

