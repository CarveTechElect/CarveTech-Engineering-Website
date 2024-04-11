let containerId = document.getElementById("slide_images_container");
let container = document.querySelector("#slide_images_container");

let leftNav = document.getElementById("left_navigation");
let rightNav = document.getElementById("right_navigation");

leftNav.addEventListener("click", picTwo);

let dots = document.querySelectorAll(".dot");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");
let dot5 = document.getElementById("dot5");
let dot6 = document.getElementById("dot6");
let dot7 = document.getElementById("dot7");
let dot8 = document.getElementById("dot8");
let dot9 = document.getElementById("dot9");


function picOne() {
    
    containerId.classList.add("picture1");
};

function picTwo() {
    containerId.classList.add("picture2");
};