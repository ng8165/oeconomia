const hamburger = document.getElementById("hamburger");
const hamburgerSymbol = hamburger.querySelector(".material-symbols-outlined");
const navPages = document.getElementById("pages");
const collapsibles = document.querySelectorAll(".collapsible");

hamburger.addEventListener("click", function() {
    navPages.classList.toggle("show");
    hamburgerSymbol.innerHTML = hamburgerSymbol.innerHTML === "menu" ? "close" : "menu";
});

for (let i=0; i<collapsibles.length; i++) {
    const button = collapsibles[i].children[0];

    // set all links so that you can't tab through them
    const links = collapsibles[i].querySelectorAll("a");
    for (let j=0; j<links.length; j++)
        links[j].tabIndex = -1;
    
    button.addEventListener("click", toggleCollapsible);
}

function toggleCollapsible() {
    const collapsible = this.parentElement;
    collapsible.classList.toggle("open");

    // set links so that you can tab through them
    const links = collapsible.querySelectorAll("a");
    for (let i=0; i<links.length; i++)
        links[i].tabIndex = -1-links[i].tabIndex;
}