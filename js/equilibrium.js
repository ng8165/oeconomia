const msg = ["dont click ok", "you failed", "now u have to click", "thru all of this", "*sighs* :\("];
const title = document.getElementById("title");

title.addEventListener("click", function() {
    // troll messages
    confirm(msg[0]);
    for (let i=1; i<msg.length; i++)
        alert(msg[i]);

    // url parameters: https://developers.google.com/youtube/player_parameters#Parameters

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

            iframe {
                width: 100%;
                max-height: 100vh;
                aspect-ratio: 16 / 9;
                border: 0;
            }
        </style>
        <div title="lol u can't stop rick"></div>
        <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&playlist=dQw4w9WgXcQ&loop=1&disablekb=1&playsinline=1&iv_load_policy=3" allow="autoplay"></iframe>
    `;
});
