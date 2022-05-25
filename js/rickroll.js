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
            "autoplay": 1,
            "controls": 0,
            "iv_load_policy": 3,
            "loop": 1,
            "disablekb": 1,
            "modestbranding": 1,
            "origin": "https://oeconomia.netlify.app",
            "playlist": "dQw4w9WgXcQ",
            "playsinline": 1,
            "rel": 0
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    onPlayerStateChange(event);
}

let tried = 0; // 0 = not tried, 1 = autoplay, 2 = muted autoplay, 3 = fail
let finalized = false;
function onPlayerStateChange(event) {
    if (!finalized) {
        if (tried === 0) {
            player.playVideo();
            tried = 1;
        } else if (tried === 1) {
            if (event.data === YT.PlayerState.PLAYING) {
                finalized = true;
                alert("autoplay");
            } else {
                player.mute();
                player.playVideo();
                tried = 2;
            }
        } else if (tried === 2) {
            finalized = true;

            if (event.data !== YT.PlayerState.PLAYING) {
                alert("good job, ur immune");
                tried = 3;
            } else {
                alert("muted");
            }
        }
    }
}