var APIUrl="http://184.73.111.236:3000/api/v1";
var authString='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM5NjEwZjE5ZWI0ZDExODQ0NTIwOTEiLCJpYXQiOjE2NDc5Mjc1Njd9.DxHIVmAqOOiTPjDglhNb-ThPwezRsuePsCY0OrfIUdE'
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function  startGame() {
   
    if (getWidth() < 1050) {
        var config = {
            type: Phaser.AUTO,
            // scale: {
            //     width: 1920,
            //     height: 1080
            // },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            parent: 'phaser-example',
            transparent: true,
            audio: {
            disableWebAudio: false,
            },
            scale:{
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1920,
                height: 1080,
                orientation: Phaser.Scale.Orientation.PORTRAIT

            },
            dom: {
                createContainer: true
            },
            scene: [HomeScene,SquadScene,PlayScene,TroopScene,RegionScene,GameScene,GameLogin]
        };
    }
    else {
        //No Adding of Scene in the Config
        var config = {
            type: Phaser.AUTO,
            // scale: {
            //     width: 1920,
            //     height: 1080
            // },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            parent: 'phaser-example',
            transparent: true,
            audio: {
            disableWebAudio: true,
            
            },
            scale:{
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1920,
                height: 1080,
            },
            dom: {
                createContainer: true
            },
            scene: [HomeScene,SquadScene,PlayScene,TroopScene,RegionScene,GameScene,GameLogin]
            
        };
    }

    var element;
    //Our Game Object
    game = new Phaser.Game(config);
   
    
   
}
     //getTank(authString);
      startGame();

    // function getTank(authString) {
    //     console.log(authString);
    //     var settings = {
    //         "url": APIUrl+"/game/tanks",
    //         "method": "GET",
    //         "timeout": 0,
    //        "headers": {
    //             "authorization": authString
    //           },
    //       };

    //     $.ajax(settings).done(function (response) {
    //     console.log(response);
    //     startGame(authString,response);
    //    });
      
    // }




    // window.focus()
    //     resize();
    //     window.addEventListener("resize", resize, false);
    // function resize() {
    //     var canvas = document.querySelector("canvas");
    //     var windowWidth = window.innerWidth;
    //     var windowHeight = window.innerHeight - 100;
    //     var windowRatio = windowWidth / windowHeight;
    //     var gameRatio = game.config.width / game.config.height;
    //     if(windowRatio < gameRatio){
    //         canvas.style.width = windowWidth + "px";
    //         canvas.style.height = (windowWidth / gameRatio) + "px";
    //     }
    //     else{
    //         canvas.style.width = (windowHeight * gameRatio) + "px";
    //         canvas.style.height = windowHeight + "px";
    //     }
    // }

