var video;
var volumeDisplay;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    volumeDisplay = document.querySelector("#volume");

    video.autoplay = false;
    video.loop = false;

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        volumeDisplay.innerHTML = video.volume * 100 + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed " + video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed " + video.playbackRate);
    });

    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location " + video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.innerHTML = "Mute";
        } else {
            video.muted = true;
            this.innerHTML = "Unmute";
        }
    });

    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        volumeDisplay.innerHTML = video.volume * 100 + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
