function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


    if (getWidth() < 1050) {
        var config = {
            type: Phaser.AUTO,
            dom: {
                createContainer: true
            },
            transparent: true,
            audio: {
            disableWebAudio: true
            },
            scale:{
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 720,
                height: 1180,
                orientation: Phaser.Scale.Orientation.PORTRAIT

            },
            scene: [GameScene]
        };
    }
    else {
        //No Adding of Scene in the Config
        var config = {
            type: Phaser.AUTO,
            dom: {
                createContainer: true
            },
            transparent: true,
            audio: {
            disableWebAudio: true
            },
            scale:{
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1920,
                height: 1080,
                orientation: Phaser.Scale.Orientation.PORTRAIT

            },
            scene: [GameScene]
        };
    }

    



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
