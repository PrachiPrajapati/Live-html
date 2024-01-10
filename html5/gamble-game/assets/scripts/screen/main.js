window.onload = function() {

    //No Adding of Scene in the Config
    var config = {
        type: Phaser.AUTO,
        scale: {
            width: 1600,
            height: 800
        },
        audio: {
        disableWebAudio: true
        },
        scene: [GameScene]
    };


    //Our Game Object
     game = new Phaser.Game(config);
     window.focus()
        resize();
        window.addEventListener("resize", resize, false);
    function resize() {
        var canvas = document.querySelector("canvas");
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight - 100;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio = game.config.width / game.config.height;
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else{
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }
}