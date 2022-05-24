const hamburger = document.getElementById("hamburger")
const navPages = document.getElementById("pages");
const collapsibles = document.querySelectorAll(".collapsible");


hamburger.addEventListener("click", function() {
    navPages.classList.toggle("show");
});

for (let i=0; i<collapsibles.length; i++) {
    const collapsible = collapsibles[i];
    const button = collapsible.children[0];
    const symbol = button.children[1];
    const content = collapsible.children[1];
    button.addEventListener("click", function() {
        symbol.classList.toggle("open");
        content.classList.toggle("open");
    });
}