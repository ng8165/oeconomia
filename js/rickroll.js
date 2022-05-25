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
            "onStateChange": onPlayerStateChange
        }
    });
}

let tryWithAudio = false;
function onPlayerStateChange(event) {
    alert(event.data);
    // try playing with audio first
    if (!tryWithAudio) {
        player.playVideo();
        tryWithAudio = true;
        alert("try autoplay with audio");
    }

    // if does not succeed (try variable is true and not playing)
    // then mute and try to play
    if (tryWithAudio && event.data !== YT.PlayerState.PLAYING) {
        player.mute();
        player.playVideo();
        alert("try muted autoplay");
    }
}