const msg = ["dont click ok", "you failed", "now u have to click", "thru all of this", "*sighs* :\("];
const title = document.getElementById("title");

title.addEventListener("click", function() {
    // troll messages
    confirm(msg[0]);
    for (let i=1; i<msg.length; i++)
        alert(msg[i]);

    // css
    const css = document.createElement("style");
    css.innerHTML = `
        
    `;
    document.body.append(css);

    document.body.innerHTML = `
        <style>
            body, div {
                width: 100vw;
                height: 100vh;
            }

            body {
                background-color: black;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            div {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 100;
            }

            video {
                width: 100%;
                max-height: 100vh;
                aspect-ratio: 16 / 9;
                border: 0;
            }
        </style>
        <div title="lol you can't stop rick"></div>
        <video playsinline autoplay muted loop>
            <source src="img/rickroll.mp4" type="video/mp4">
        </video>
    `;
});
