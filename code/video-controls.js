let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15;
}

function avanca() {
    video.currentTime += 15;
}

function diminuir_velo() {
    video.playbackRate -= 0.1;
}

function aumentar_velo() {
    video.playbackRate += 0.1;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

