// https://developers.google.com/youtube/iframe_api_reference#Getting_Started

// place youtube scripts as first scripts
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "dQw4w9WgXcQ",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters#Parameters
            "autoplay": 1, // autoplay
            "controls": 0, // no controls
            "iv_load_policy": 3, // no annotations
            "loop": 1, // loop
            "playlist": "dQw4w9WgXcQ", // loop
            "disablekb": 1, // disable keyboard events
            "playsinline": 1, // plays inline on mobile (not fullscreen)
            "rel": 0, // only related videos from channel
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    onPlayerStateChange(event);
}

let tried = 0; // 0 = not tried, 1 = autoplay, 2 = muted autoplay, 3 = fail
let finalized = false;
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.BUFFERING)
        return;
    
    if (!finalized) {
        if (tried === 0) {
            player.playVideo();
            tried = 1;
        } else if (tried === 1) {
            if (event.data === YT.PlayerState.PLAYING) {
                finalized = true;
                console.log("autoplay");
            } else {
                player.mute();
                player.playVideo();
                tried = 2;
            }
        } else if (tried === 2) {
            if (event.data === YT.PlayerState.PLAYING) {
                finalized = true;
                console.log("muted");
            } else {
                finalized = true;
                alert("good job, ur immune");
                tried = 3;
                document.getElementById("overlay").remove();
                player.unMute();
            }
        }
    }
}