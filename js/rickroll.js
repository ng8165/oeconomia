// https://developers.google.com/youtube/iframe_api_reference#Getting_Started

// place youtube scripts as first scripts
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
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
            "playlist": "dQw4w9WgXcQ",
            "playsinline": 1
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

let tried = false;
function onPlayerStateChange(event) {
    if (!tried) {
        player.playVideo();
        
        if (event.data !== YT.PlayerState.PLAYING) {
            player.mute();
            player.playVideo();

            if (event.data !== YT.PlayerState.PLAYING) {
                alert("i guess ur immune. good job.");
            } else {
                alert("mobile: muted autoplay");
            }
        } else {
            alert("autoplay works");
        }

        tried = true;
    }
}