function playSound(audioName){
    let audio = new Audio(audioName);
    audio.loop = true;
    audio.play();
}
playSound("sound1.mp3")