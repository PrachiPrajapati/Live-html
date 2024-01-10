var betText;
var lovelyText;
var betText;
var betvalue = 100;
var winTextTitle;
var winTextdata;
var pinkcards;
var greencards;
var bluecards

var gameOptions = {
 
    // flipping speed in milliseconds
    flipSpeed: 200,
 
    // flipping zoom ratio. Simulates the card to be raised when flipping
    flipZoom: 1.2
}

class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameScene'});
    }

    preload(){
    
        this.load.image('bg', 'assets/img/bg.jpg');
        this.load.image('title', 'assets/img/title.png');
        this.load.image('frameimg', 'assets/img/frame-border.png');
        this.load.image('greencard', 'assets/img/green_card.png');
        this.load.image('pinkcard', 'assets/img/pink_card.png');
        this.load.image('bluecard', 'assets/img/blue_card.png');
        this.load.image('greenbtn', 'assets/img/green_button.png');
        this.load.image('pinkbtn', 'assets/img/pink_button.png');
        this.load.image('minusbg', 'assets/img/minus.png');
        this.load.image('plusbg', 'assets/img/plus.png');
        this.load.image('introtext', 'assets/img/intro-text.png');
        this.load.image('cards', 'assets/img/green-sprite-img.png');
        this.load.image('numberbg', 'assets/img/back_of_plus_m.png');
        this.load.image('winback', 'assets/img/win-back.png');
        this.load.image('winred', 'assets/img/win_red.png');
        this.load.image('connectwallet', 'assets/img/connectwallet.png');
         
    }
    
    create(){

        var bgimage= this.add.image(800, 400, 'bg');
        this.add.image(800, 110, 'title');
        this.add.image(530, 260, 'frameimg');
        this.add.image(710, 260, 'frameimg');
        this.add.image(890, 260, 'frameimg');
        var frame4 = this.add.image(1070, 260, 'frameimg');
        var frame4img = this.add.image(1070, 260, 'greencard');
        var frame4imgpink = this.add.image(1070, 260, 'pinkcard');
        frame4img.setScale(0);
        frame4imgpink.setScale(0);
        pinkcards = this.add.image(800, 550, 'pinkcard');
        pinkcards.scaleX = 0;
        greencards = this.add.image(800, 550, 'greencard');
        greencards.scaleX = 0;
        bluecards = this.add.image(800, 550, 'bluecard');
        this.add.image(800, 410, 'introtext');


        betText = this.add.text(403, 450, 'Place Your Bet', { fontSize: '20px', fill: '#f6d85c', fontFamily: 'Martian_Wars'});
        lovelyText = this.add.text(425, 550, 'LOVELY', { fontSize: '18px', fill: '#fff', fontFamily: 'Martian_Wars'});

        betText = this.add.text(410, 490, betvalue, { fontSize: '24px', fill: '#fff', fontFamily: 'Martian_Wars'}).setPadding(40, 10);
        const betbg = this.add.sprite(460, 515, 'numberbg')
                            .setInteractive({ useHandCursor: false })
                            .setScale(0.9)
                            .setOrigin(0.5);
                            

        

        // this.add.text(100, 110, 'Phaser', style).setPadding(64, 16);

        

        const greenbutton = this.add.sprite(420, 625, 'greenbtn')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .setOrigin(0.5)
                            .on('pointerdown', () =>{ var greentween1 = this.tweens.add({
                    targets: bluecards,
                    scaleX: 0.00,
                    ease: 'Linear',
                    duration: 100,
                    repeat: 0,
                    yoyo: false,
                    onComplete:function(){greentween1.remove(),game.scene.scenes[0].test2()},
                    });
                             setTimeout(function(){ frame4img.setScale(1); }, 500);
                             winbg.setScale(1.2);
                                winred.setScale(1.1);
                                winTextTitle.setScale(1);
                                winTextdata.setScale(1);
                            });
        const bluebutton = this.add.sprite(590, 625, 'pinkbtn')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .setOrigin(0.5)
                            .on('pointerdown', () =>  {
                                var tween1 = this.tweens.add({
                    targets: bluecards,
                    scaleX: 0.00,
                    ease: 'Linear',
                    duration: 100,
                    repeat: 0,
                    yoyo: false,
                    onComplete:function(){tween1.remove(),game.scene.scenes[0].test()},
                    });
                                
                                setTimeout(function(){ frame4imgpink.setScale(1); }, 500);
                                winbg.setScale(1.1);
                                winred.setScale(1.1);
                                winTextTitle.setScale(1);
                                winTextdata.setScale(1);
                            });
        const test = this.add.sprite(396, 513, 'minusbg')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .setOrigin(0.5)
                            .on('pointerdown', () =>  {
                                betvalue -= 1;
                                betText.setText(betvalue);
                            });
                            
        const test1 = this.add.sprite(536, 513, 'plusbg')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .setOrigin(0.5)
                            .on('pointerdown', () =>  {
                                betvalue += 1;
                                betText.setText(betvalue);

                            }); 
        betText = this.add.text(410, 492, betvalue, { fontSize: '24px', fill: '#fff', fontFamily: 'Martian_Wars'}).setPadding(40, 10);


        const winbg = this.add.sprite(1070, 540, 'winback')
                            .setInteractive({ useHandCursor: false })
                            .setScale(0)
                            .setOrigin(0.5);
                            

        const winred = this.add.sprite(1115, 538, 'winred')
                            .setInteractive({ useHandCursor: false })
                            .setScale(0)
                            .setOrigin(0.5);
                            

        winTextTitle = this.add.text(925, 495, 'WININGS',{fontSize: '26px',fill: '#451f08',fontFamily: 'Martian_Wars'}).setPadding(15,30,200,30);
        winTextdata = this.add.text(1035, 505, (betvalue * 2) + ' LOVELY',{fontSize: '22px',fill: '#fff',fontFamily: 'Martian_Wars'}).setPadding(20,20,30,20);
         winTextTitle.setScale(0);
         winTextdata.setScale(0);

         const walletbtn = this.add.sprite(1240, 140, 'connectwallet')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .setOrigin(0.5)
  
    }
    startNextScene()
    {
        console.log('Button Clicked!');
        this.scene.stop('gameScene');
        this.scene.start('PopupScene');
    }
    test() {
           var tween2 = this.tweens.add({
                    targets: pinkcards,
                    scaleX: 1.00,
                    ease: 'Linear',
                    duration: 100,
                    repeat: 0,
                    yoyo: false,
                    onComplete:function(){tween2.remove()},
                    });
      }  
    test2() {
           var greentween2 = this.tweens.add({
                    targets: greencards,
                    scaleX: 1.00,
                    ease: 'Linear',
                    duration: 100,
                    repeat: 0,
                    yoyo: false,
                    onComplete:function(){greentween2.remove()},
                    });
        }
}