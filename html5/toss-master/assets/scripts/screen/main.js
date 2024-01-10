if (window.innerWidth < 1050){
    var config = {
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
        },
        transparent: true,
        scale:{
            mode: Phaser.Scale.FIT,
            // autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 720,
            height: 1180,
        },
        scene: [GameScene],
    };
}
else {
    var config = {
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
        },
        transparent: true,
        scale:{
            mode: Phaser.Scale.FIT,
            width: 1920,
            height: 1080,
    
        },
        scene: [GameScene],
    };
}

var game = new Phaser.Game(config);