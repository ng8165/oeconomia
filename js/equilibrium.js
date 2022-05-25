const msg = ["dont click ok", "you failed", "now u have to click", "thru all of this", "*sighs* :\(", ".", ". .", ". . ."];
const title = document.getElementById("title");

title.addEventListener("click", function() {
    // troll messages
    confirm(msg[0]);
    for (let i=1; i<msg.length; i++)
        alert(msg[i]);
    
    // parameters: https://developers.google.com/youtube/player_parameters#Parameters
    const url = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&playlist=dQw4w9WgXcQ&loop=1&disablekb=1&playsinline=1&iv_load_policy=3";
    
    // create iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = "width: 100%; max-height: 100vh; aspect-ratio: 16 / 9; border: 0;";
    iframe.allow = "autoplay";
    
    // create overlay over the video so you can't click it
    const overlay = document.createElement("div");
    overlay.style = "width: 100vw; height: 100vh; position: absolute; top: 0; left: 0; z-index: 100;";
    overlay.title = "lol you can't stop rick";

    // add to body
    document.body.style = "width: 100vw; height: 100vh; background-color: black; position: relative; display: flex; flex-direction: column; justify-content: center;";
    document.body.innerHTML = "";
    document.body.appendChild(overlay);
    document.body.appendChild(iframe);
});
