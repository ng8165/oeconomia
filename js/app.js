const hamburger = document.getElementById("hamburger")
const navPages = document.getElementById("pages");
const collapsibles = document.querySelectorAll(".collapsible");

hamburger.addEventListener("click", function() {
    navPages.classList.toggle("show");
});

for (let i=0; i<collapsibles.length; i++) {
    const button = collapsibles[i].children[0];
    button.addEventListener("click", function() {
        const collapsible = this.parentElement;
        collapsible.classList.toggle("open")
    });
}