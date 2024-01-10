var defaultAmount = 800;
var betAmount = (Math.floor(defaultAmount * 100) / 100).toFixed(2);
var gameBg;
var flag = "true"
var logo; 
var gameBoard;
var headText, tailText;
var outputImg;
var headCoin1, headCoin, tailCoin, tailCoin1;
var totalBet;
var copyCode;
var audioButton;
var minButton, maxButton;
var halfBet, flipButton, betText, betValueBg, betValue, minmaxText;
var historyBox, historytableTitle, historyBorder, hashText, cashText, provablyFair;
var twoMultiplier;
var outputData1,outputData2,outputData3,outputData4,outputData5,outputData6,outputData7,outputData8,outputData9,outputData10;


class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
    }

    preload() {
        this.load.audio('music', 'assets/sound/music.mp3');

        this.load.image('gamebg', 'assets/images/game-bg.jpg');
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('gameboard', 'assets/images/game-board.png');
        this.load.image('tailcoin', 'assets/images/tail-coin.png');
        this.load.image('headcoin', 'assets/images/head-coin.png');
        this.load.image('audio', 'assets/images/audio-icon.png');

        this.load.image('minbox', 'assets/images/min-box.png');
        this.load.image('halfbet', 'assets/images/halfbet-icon.png');
        this.load.image('totalbet', 'assets/images/total-bet-box.png');
        this.load.image('bettitle', 'assets/images/bet-title.png');
        this.load.image('betbg', 'assets/images/bet-value-bg.png');
        this.load.image('multipliericon', 'assets/images/two-multiplier.png');
        this.load.image('maxbox', 'assets/images/max-box.png');
        this.load.image('flipbtn', 'assets/images/flip-button.png');

        this.load.image('provablyfair', 'assets/images/provably-fair.png');
        this.load.image('copycode', 'assets/images/copy-code.png');
        this.load.image('historybox', 'assets/images/history-bet-box.png');
        this.load.image('historybetborder', 'assets/images/history-bet-border.png');
    }

    create() {
        // game background
        gameBg = this.add.image(960, 540, 'gamebg');
        // game board
        gameBoard = this.add.image(720, 470, 'gameboard');
        logo = this.add.image(725, 110, 'logo');
        // game coins
        headCoin1 = this.add.sprite(520, 510, 'headcoin').setScale(1);
        headCoin1.scaleX = 0;
        tailCoin1 = this.add.sprite(520, 510, 'tailcoin').setScale(1);
        tailCoin1.scaleX = 0;

        outputImg = this.add.image(520, 510, 'headcoin').setScale(0);
        headText = this.add.text(1140, 285, 'HEAD', { fontSize: '31px', fill: '#FFED40', fontFamily: "AllerDisplay" });
        headCoin = this.add.image(1180, 410, 'headcoin').setScale(0.65)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
           flag = "true"
        })

        tailText = this.add.text(1145, 515, 'TAIL', { fontSize: '31px', fill: '#FFED40', fontFamily: "AllerDisplay" })
        tailCoin = this.add.image(1180, 640, 'tailcoin').setScale(0.65)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
           flag = "false"
        })

        // game text 
        cashText = this.add.text(120, 810, 'CASH: 100000', { fontSize: '26px', fill: '#A8DAE2', fontFamily: "AllerDisplay" });
        betText = this.add.image(710, 855, 'bettitle').setScale(0.9);
        // total bet box
        totalBet = this.add.image(720, 940, 'totalbet');

        this.sound.add('music');
        audioButton = this.add.image(205, 940, 'audio')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                var music = this.sound.add('music');
                this.sound.play('music', {volume:1});
            });

        minButton = this.add.image(370, 940, 'minbox')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = 0.01;
                betValue.setText(betAmount.toFixed(2));
            });

        halfBet = this.add.image(500, 940, 'halfbet')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = betAmount / 2;
                betValue.setText(betAmount.toFixed(2));
            });

        betValueBg = this.physics.add.image(715, 940, 'betbg');
        betValue = this.add.text(715, 935, betAmount, { fontSize: '63px', fill: '#014156', fontFamily: "AllerDisplay" });
        // roundedNumber = ;
        betValue.setOrigin(0.5);

        maxButton = this.add.image(1050, 940, 'maxbox')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = 1000;
                betValue.setText(betAmount);
            });

        twoMultiplier = this.add.image(930, 940, 'multipliericon')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = betAmount * 2;
                betValue.setText(betAmount.toFixed(2));
            });

        flipButton = this.add.image(1285, 940, 'flipbtn')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                outputImg.setScale(0);
                var tween1 = this.tweens.add({
                    targets: headCoin1,
                    scaleX: 1,
                    ease: 'Linear',
                    duration: 100,
                    repeat: 0,
                    yoyo: true,
                        onComplete:function(){
                            game.scene.scenes[0].tween2()
                        }
                });

                setTimeout(function(){ 
                    
                    // outputImg.setTexture('tailcoin');
                    outputImg.setScale(1);
                  
                    outputData1.setText('Head ' + '   ' + betAmount + '   ' +  ' 1');
                }, 3000);

                // outputImg.setScale(0);
            });
            
        minmaxText = this.add.text(600, 1015, 'MIN 0.01 - MAX 1000', { fontSize: '25px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // Provably block
        provablyFair = this.physics.add.image(1670, 150, 'provablyfair').setScale(0.98);
        hashText = this.add.text(1520, 146, 'HASH: b3c61e4135', { fontSize: '31px', fill: '#A8DAE2', fontFamily: "AllerDisplay" });
        const copyCode = this.add.image(1810, 166, 'copycode')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5);
        // history block
        historyBox = this.physics.add.image(1670, 620, 'historybox').setScale(0.98);
        historytableTitle = this.add.text(1520, 340, 'GAME  BET  PROFIT,DEMO', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        historyBorder = this.physics.add.image(1665, 385, 'historybetborder');
        
        outputData1 = this.add.text(1520, 380, '', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        
    }

    update() {

        if (betAmount >= 1000) {
            minButton.input.enabled = true;
            halfBet.input.enabled = true;
            minButton.setAlpha(1);
            halfBet.setAlpha(1);
            maxButton.input.enabled = false;
            twoMultiplier.input.enabled = false;
            maxButton.setAlpha(0.7);
            twoMultiplier.setAlpha(0.7);
            betAmount = 1000;
            betValue.setText(betAmount);
        }
        else if (betAmount <= 0.01) {
            maxButton.input.enabled = true;
            twoMultiplier.input.enabled = true;
            maxButton.setAlpha(1);
            twoMultiplier.setAlpha(1);
            minButton.input.enabled = false;
            halfBet.input.enabled = false;
            minButton.setAlpha(0.7);
            halfBet.setAlpha(0.7);
            betAmount = 0.01;
            betValue.setText(betAmount);
        }
        else {
            maxButton.input.enabled = true;
            twoMultiplier.input.enabled = true;
            maxButton.setAlpha(1);
            twoMultiplier.setAlpha(1);
            minButton.input.enabled = true;
            halfBet.input.enabled = true;
            minButton.setAlpha(1);
            halfBet.setAlpha(1);
        }

        if(flag == "true"){
            tailText.setAlpha(0.5);
            tailCoin.setAlpha(0.5);
            headText.setAlpha(1);
            headCoin.setAlpha(1);
        }
        else if(flag == "false"){
            tailText.setAlpha(1);
            tailCoin.setAlpha(1);
            headText.setAlpha(0.5);
            headCoin.setAlpha(0.5);
        }
    }

    tween2(){
        var tween2 = this.tweens.add({
            targets: headCoin1,
            scaleX: 0, 
            yoyo: true,
        });
        var tween3 = this.tweens.add({
            targets: tailCoin1,
            scaleX: 1,
            ease: 'Linear',
            duration: 100,
            repeat: 0,
            yoyo: true,
                onComplete:function(){
                    game.scene.scenes[0].tween4()
                }
        });
    }
    
    tween4(){
        var tween5 = this.tweens.add({
            targets: headCoin1,
            scaleX: 1,
            ease: 'Linear',
            duration: 100,
            repeat: 0,
            yoyo: true,
        });
        
        var tween6 = this.tweens.add({
            targets: tailCoin1,
            scaleX: 0, 
            ease: 'Linear',
            duration: 100,
            repeat: 0,
            yoyo: true,
                onComplete:function(){
                    game.scene.scenes[0].tween2()
                }
        });
    }

}