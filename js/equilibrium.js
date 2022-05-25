const msg = ["dont click ok", "you failed", "now u have to click", "thru all of this", "*sighs* :("];
const title = document.getElementById("title");
const body = document.body;
const favicon = document.querySelector("link[rel='shortcut icon']");

title.addEventListener("click", function() {
    // troll messages
    confirm(msg[0]);
    for (let i=1; i<msg.length; i++)
        alert(msg[i]);

    // create iframe for rickroll.html and append to body
    const iframe = document.createElement("iframe");
    iframe.src = "rickroll.html";
    body.innerHTML = "";
    body.appendChild(iframe);

    // change document title and favicon
    document.title = "rickroll";
    favicon.href = "img/rick.png";
    body.style = "background-color: black;"
});