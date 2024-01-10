var defaultAmount = 800;
var betAmount = (Math.floor(defaultAmount * 100) / 100).toFixed(2);
// var gameBg;
var popupBg;
var flag = "true"
var scoreFlag = "true"
var logo,home; 
var gameBoard,cardBoard; 
var headText, tailText;
var outputImg;
var headCoin1, headCoin, tailCoin;
var totalBet;
var copyCode;
var audioButton;
var minButton, maxButton;
var halfBet, flipButton, betText, betValueBg, betValue, minmaxText;
var historyBox, historytableTitle, historyBorder, hashText, cashText, provablyFair;
var twoMultiplier;
var outputData1,outputData2,outputData3,outputData4,outputData5,outputData6,outputData7;
// var tween1,tween3,tween4,tween6,tween7;
var flipAnime,clickAnime;
var score,closeIcon,timeline;
var msgPopup,msgpopupText,popupClose;
var mobilegameBoard,mobilebetBox,mobhistoryBox,mobhistoryTitle;

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
    }

    preload() {
        this.load.image('closeicon', 'assets/images/close.png');
        // this.load.image('popupbg', 'assets/images/popup.png');
        this.load.image('msgpopup', 'assets/images/msgpopup.png');
        // this.load.image('gamebg', 'assets/images/game-bg.jpg');
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('homeicon', 'assets/images/home-icon.png');

        this.load.image('gameboard', 'assets/images/main-panel.png');

        this.load.image('cardboard', 'assets/images/card-panel.png');
        this.load.image('tailcoin', 'assets/images/tail-coin.png');
        this.load.image('headcoin', 'assets/images/head-coin.png');
        this.load.image('audio', 'assets/images/audio-icon.png');
        this.load.image('scorebutton', 'assets/images/score.png');
        this.load.image('mobilegameboard', 'assets/images/mob-main-panel.png');
        this.load.image('minbox', 'assets/images/min-box.png');
        this.load.image('halfbet', 'assets/images/halfbet-icon.png');
        this.load.image('totalbet', 'assets/images/total-bet-box.png');
        this.load.image('bettitle', 'assets/images/bet-title.png');
        this.load.image('betbg', 'assets/images/bet-value-bg.png');
        this.load.image('multipliericon', 'assets/images/two-multiplier.png');
        this.load.image('maxbox', 'assets/images/max-box.png');
        this.load.image('flipbtn', 'assets/images/flip-button.png');

        this.load.image('mobhistorybox', 'assets/images/mob-history-box.png');
        this.load.image('mobhistorytitle', 'assets/images/mob-history-title.png');

        // this.load.image('provablyfair', 'assets/images/provably-fair.png');
        // this.load.image('copycode', 'assets/images/copy-code.png');
        this.load.image('historybox', 'assets/images/history-bet-box.png');
        this.load.image('historybetborder', 'assets/images/history-bet-border.png');
    }

    create() {
        // game background
       

        // gameBg = this.add.image(960, 540, 'gamebg');
        
        // game board
        gameBoard = this.add.image(720, 470, 'gameboard');
        mobilegameBoard = this.add.image(360,450, 'mobilegameboard').setScale(0);


        cardBoard = this.add.image(1210, 505, 'cardboard').setScale(1.08,1.08);
        logo = this.add.image(725, 110, 'logo');
        home = this.add.image(60,120, 'homeicon');

        // game coins
        headCoin1 = this.add.sprite(520, 510, 'headcoin').setScale(1);
        headCoin1.scaleX = 0;
        // tailCoin1 = this.add.sprite(520, 510, 'tailcoin').setScale(1);
        // tailCoin1.scaleX = 0;

        outputImg = this.add.image(520, 510, 'headcoin').setScale(0);
        
        headText = this.add.text(1155, 285, 'HEAD', { fontSize: '31px', fill: '#FFED40', fontFamily: "AllerDisplay" });
        headCoin = this.add.image(1195, 410, 'headcoin').setScale(0.65)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
           flag = "true"
        })

        tailText = this.add.text(1160, 515, 'TAIL', { fontSize: '31px', fill: '#FFED40', fontFamily: "AllerDisplay" })
        tailCoin = this.add.image(1195, 640, 'tailcoin').setScale(0.65)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
           flag = "false"
        })

        // game text 
        cashText = this.add.text(120, 810, 'CASH: 100000', { fontSize: '26px', fill: '#A8DAE2', fontFamily: "AllerDisplay" });
        
        // total bet box
        totalBet = this.add.image(720, 940, 'totalbet');
       
        // mobile code
        
        mobilebetBox = this.add.image(360,935, 'totalbet').setScale(0);
        
        msgPopup = this.add.image(700, 520, 'msgpopup').setScale(0);
        msgpopupText = this.add.text(700, 520, 'YOU WIN!', { fontSize: '63px', fill: '#fff', fontFamily: "AllerDisplay" }).setScale(0);
        msgpopupText.setOrigin(0.5);

        popupClose = this.add.image(960, 310, 'closeicon').setScale(0)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {  
            msgPopup.setScale(0);
            msgpopupText.setScale(0);
            popupClose.setScale(0);

        });

        // this.sound.add('music');
        audioButton = this.add.image(205, 940, 'audio')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
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
        
        betValue = this.add.text(716, 937, betAmount, { fontSize: '63px', fill: '#014156', fontFamily: "AllerDisplay" });        
        betValue.setOrigin(0.5);
       
        betText = this.add.image(710, 855, 'bettitle').setScale(0.9);

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

                // clickAnime = setInterval(function() {
                //     game.scene.scenes[0].flip1(headCoin1);
                // }, 300); 

                // if(window.innerWidth < 1050){
                //     clickAnime = setInterval(function() {
                //         game.scene.scenes[0].flip1(headCoin1);
                //     }, 300); 
                // }
                // else{
                //     clickAnime = setInterval(function() {
                //         game.scene.scenes[0].flip1(headCoin1);
                //     }, 300); 
                // }

                game.scene.scenes[0].flip1(headCoin1); 
                
                setTimeout(function(){ 
                    game.scene.scenes[0].flip1(headCoin1);           
                }, 250);

                setTimeout(function(){ 
                    game.scene.scenes[0].flip1(headCoin1);           
                }, 450);

                setTimeout(function(){ 
                    game.scene.scenes[0].flip1(headCoin1);           
                }, 650);

                setTimeout(function(){ 
                    game.scene.scenes[0].flip1(headCoin1);           
                }, 850);

                setTimeout(function(){ 
                    game.scene.scenes[0].flip1(headCoin1);           
                }, 1050);

                // setTimeout(function(){ 
                //     clearInterval(clickAnime);      
                //         clickAnime = setInterval(function() {
                //             headCoin1.scaleX -= 0.1;
                //       }, 100);            
                // }, 200);
                
                setTimeout(function(){ 
                      clearInterval(flipAnime);      
                        flipAnime = setInterval(function() {
                            flipButton.setAlpha(0.7);
                            flipButton.input.enabled = false;
                        }, 100);            
                }, 200);

                setTimeout(function(){ 
                    
                    // clearInterval(clickAnime); 
                    outputImg.setTexture('headcoin');
                   
                    if(window.innerWidth < 1050){
                        outputImg.setScale(0.65);
                    }
                    else{
                        outputImg.setScale(1);
                    }
                    
                    clearInterval(flipAnime);  
                     
                    flipButton.setAlpha(1);
                    flipButton.input.enabled = true;

                    // outputData1.setText('Head       ' + betAmount +  '        1');
                   
                }, 1400);
            
                // setTimeout(function(){ 
                    
                //     if(window.innerWidth < 1050){
                //         msgpopupText.setScale(0.7);
                //         msgPopup.setScale(0.6,0.35);
                //         popupClose.setScale(0.7);
                //      }
                //     else{
                //         msgpopupText.setScale(1);
                //         msgPopup.setScale(1.05,0.75);
                //         popupClose.setScale(1);
                //     }
                   
                // }, 1700);

            });
            
        minmaxText = this.add.text(600, 1015, 'MIN 0.01 - MAX 1000', { fontSize: '25px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // Provably block
        popupBg = this.add.image(360, 630, 'popupbg').setScale(0);
        // provablyFair = this.physics.add.image(1670, 150, 'provablyfair').setScale(0.98);
        // hashText = this.add.text(1520, 146, 'HASH: b3c61e4135', { fontSize: '31px', fill: '#A8DAE2', fontFamily: "AllerDisplay" });
        // copyCode = this.add.image(1810, 166, 'copycode')
        //     .setInteractive({ useHandCursor: true })
        //     .setOrigin(0.5);
        
        mobhistoryBox = this.add.image(360,530, 'mobhistorybox').setScale(0);
        mobhistoryTitle = this.add.image(360,255, 'mobhistorytitle').setScale(0);
        // history block
        historyBox = this.physics.add.image(1670, 620, 'historybox').setScale(0.98);
        historytableTitle = this.add.text(1520, 340, 'GAME        BET        PROFIT', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        historyBorder = this.physics.add.image(1665, 385, 'historybetborder');
        
       

        // outputData1 = this.add.text(1520, 390, '', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // coin static value
        var coinValue1 = this.add.text(1520, 390, 'Head', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue2 = this.add.text(1520, 430, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue3 = this.add.text(1520, 470, 'Head', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue4 = this.add.text(1520, 510, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue5 = this.add.text(1520, 550, 'Head', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue6 = this.add.text(1520, 590, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue7 = this.add.text(1520, 630, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue8 = this.add.text(1520, 670, 'Head', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue9 = this.add.text(1520, 710, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var coinValue10 = this.add.text(1520, 750, 'Tail', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // bet static value
        var betValue1 = this.add.text(1648, 390, '800', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue2 = this.add.text(1648, 430, '0.01', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue3 = this.add.text(1648, 470, '400', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue4 = this.add.text(1648, 510, '200.00', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue5 = this.add.text(1648, 550, '400.00', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue6 = this.add.text(1648, 590, '200', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue7 = this.add.text(1648, 630, '600', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue8 = this.add.text(1648, 670, '800', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue9 = this.add.text(1648, 710, '6.25', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue10 = this.add.text(1648, 750, '12.50', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);

        // profit static value
        var profitValue1 = this.add.text(1740, 390, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue2 = this.add.text(1740, 430, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue3 = this.add.text(1740, 470, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue4 = this.add.text(1740, 510, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue5 = this.add.text(1740, 550, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue6 = this.add.text(1740, 590, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue7 = this.add.text(1740, 630, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue8 = this.add.text(1740, 670, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue9 = this.add.text(1740, 710, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        var profitValue10 = this.add.text(1740, 750, '1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        if(window.innerWidth < 1050){
            
            home.setPosition(100, 70);
            logo.setScale(0.8);
            logo.setPosition(350,70);
            
            mobilegameBoard.setScale(1);
            gameBoard.setScale(0);
            cardBoard.setScale(0);
            
           
            headCoin1.setPosition(360,370);
            // tailCoin1.setScale(0.65);
            // tailCoin1.setPosition(360,370);
            outputImg.setScale(0);
            outputImg.setPosition(360,370);
           
            headText.setPosition(190,575);
            headText.setScale(0.8);
            headCoin.setPosition(220,680);
            headCoin.setScale(0.5);
            tailText.setScale(0.8);
            tailText.setPosition(455,575);
            tailCoin.setPosition(480,680);
            tailCoin.setScale(0.5);
            
            msgPopup.setPosition(360,380);
            msgPopup.setScale(0);
            msgpopupText.setPosition(360,380);
            popupClose.setPosition(515,290);
            popupClose.setScale(0);
            
            mobilebetBox.setScale(0.5);
            totalBet.setScale(0.5);
            totalBet.setPosition(360,1095);
            cashText.setPosition(55,855);
            cashText.setScale(0.85);
            cashText.setColor('#90A3AF');
            audioButton.setPosition(120,935);
            minmaxText.setPosition(225,1015);
            minmaxText.setColor('#90A3AF');
            minmaxText.setScale(1.1);
            minButton.setPosition(155,1095);
            minButton.setScale(0.9);
            halfBet.setPosition(290,1095);
            halfBet.setScale(0.9);
            betValueBg.setPosition(350,935);
            betValueBg.setScale(0.9,0.9);
            betText.setScale(0.95);
            betText.setPosition(350,862);
            betValue.setScale(0.75);
            betValue.setPosition(350,935);
            betValue.setOrigin(0.5);
            maxButton.setPosition(560,1095);
            maxButton.setScale(0.9);
            twoMultiplier.setPosition(420,1095);
            twoMultiplier.setScale(0.9);
            flipButton.setScale(0.7);
            flipButton.setPosition(620,930)
            .on('pointerdown', () => {
                headCoin1.setScale(0.65);
            });
           
            // provablyFair.setScale(0);
            // hashText.setScale(0);
            // copyCode.setScale(0);
            
            // history block
            historyBox.setScale(0);
           
            historytableTitle.setScale(0);
            historytableTitle.setText('GAME                     BET                     PROFIT');
            historytableTitle.setPosition(160,305);
            // historyBorder.setPosition(360,495);
            // historyBorder.setScale(0);
            // outputData1.setScale(0);
            // outputData1.setPosition(240,498);

            coinValue1.setPosition(165,360);
            coinValue2.setPosition(165,400);
            coinValue3.setPosition(165,440);
            coinValue4.setPosition(165,480);
            coinValue5.setPosition(165,520);
            coinValue6.setPosition(165,560);
            coinValue7.setPosition(165,600);
            coinValue8.setPosition(165,640);
            coinValue9.setPosition(165,680);
            coinValue10.setPosition(165,720);
            coinValue1.setScale(0);
            coinValue2.setScale(0);
            coinValue3.setScale(0);
            coinValue4.setScale(0);
            coinValue5.setScale(0);
            coinValue6.setScale(0);
            coinValue7.setScale(0);
            coinValue8.setScale(0);
            coinValue9.setScale(0);
            coinValue10.setScale(0);
            betValue1.setPosition(350,360);
            betValue2.setPosition(350,400);
            betValue3.setPosition(350,440);
            betValue4.setPosition(350,480);
            betValue5.setPosition(350,520);
            betValue6.setPosition(350,560);
            betValue7.setPosition(350,600);
            betValue8.setPosition(350,640);
            betValue9.setPosition(350,680);
            betValue10.setPosition(350,720);
            betValue1.setScale(0);
            betValue2.setScale(0);
            betValue3.setScale(0);
            betValue4.setScale(0);
            betValue5.setScale(0);
            betValue6.setScale(0);
            betValue7.setScale(0);
            betValue8.setScale(0);
            betValue9.setScale(0);
            betValue10.setScale(0);
            profitValue1.setPosition(515,360);
            profitValue2.setPosition(515,400);
            profitValue3.setPosition(515,440);
            profitValue4.setPosition(515,480);
            profitValue5.setPosition(515,520);
            profitValue6.setPosition(515,560);
            profitValue7.setPosition(515,600);
            profitValue8.setPosition(515,640);
            profitValue9.setPosition(515,680);
            profitValue10.setPosition(515,720);
            profitValue1.setScale(0);
            profitValue2.setScale(0);
            profitValue3.setScale(0);
            profitValue4.setScale(0);
            profitValue5.setScale(0);
            profitValue6.setScale(0);
            profitValue7.setScale(0);
            profitValue8.setScale(0);
            profitValue9.setScale(0);
            profitValue10.setScale(0);

            closeIcon = this.add.image(630, 270, 'closeicon').setScale(0)
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {  
                scoreFlag = "false"
                mobhistoryTitle.setScale(0);
                mobhistoryBox.setScale(0);
                historyBox.setScale(0);
                historytableTitle.setScale(0);
               
                // outputData1.setScale(0);
                coinValue1.setScale(0);
                coinValue2.setScale(0);
                coinValue3.setScale(0);
                coinValue4.setScale(0);
                coinValue5.setScale(0);
                coinValue6.setScale(0);
                coinValue7.setScale(0);
                coinValue8.setScale(0);
                coinValue9.setScale(0);
                coinValue10.setScale(0);
                betValue1.setScale(0);
                betValue2.setScale(0);
                betValue3.setScale(0);
                betValue4.setScale(0);
                betValue5.setScale(0);
                betValue6.setScale(0);
                betValue7.setScale(0);
                betValue8.setScale(0);
                betValue9.setScale(0);
                betValue10.setScale(0);
                profitValue1.setScale(0);
                profitValue2.setScale(0);
                profitValue3.setScale(0);
                profitValue4.setScale(0);
                profitValue5.setScale(0);
                profitValue6.setScale(0);
                profitValue7.setScale(0);
                profitValue8.setScale(0);
                profitValue9.setScale(0);
                profitValue10.setScale(0);
                popupBg.setScale(0);
                closeIcon.setScale(0);
            });

            score = this.add.image(600,70, 'scorebutton').setScale(1)
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {  
               scoreFlag = "true"
           
               mobhistoryTitle.setScale(1.3);              
               mobhistoryBox.setScale(1,0.9);

               historytableTitle.setScale(1);
              
                //outputData1.setScale(0.8);
                coinValue1.setScale(1.1);
                coinValue2.setScale(1.1);
                coinValue3.setScale(1.1);
                coinValue4.setScale(1.1);
                coinValue5.setScale(1.1);
                coinValue6.setScale(1.1);
                coinValue7.setScale(1.1);
                coinValue8.setScale(1.1);
                coinValue9.setScale(1.1);
                coinValue10.setScale(1.1);
                betValue1.setScale(1.1);
                betValue2.setScale(1.1);
                betValue3.setScale(1.1);
                betValue4.setScale(1.1);
                betValue5.setScale(1.1);
                betValue6.setScale(1.1);
                betValue7.setScale(1.1);
                betValue8.setScale(1.1);
                betValue9.setScale(1.1);
                betValue10.setScale(1.1);
                profitValue1.setScale(1.1);
                profitValue2.setScale(1.1);
                profitValue3.setScale(1.1);
                profitValue4.setScale(1.1);
                profitValue5.setScale(1.1);
                profitValue6.setScale(1.1);
                profitValue7.setScale(1.1);
                profitValue8.setScale(1.1);
                profitValue9.setScale(1.1);
                profitValue10.setScale(1.1);
                popupBg.setScale(2);
                closeIcon.setScale(1);
            });

        }
    }

    
    flip1(headCoin1) {

        if (window.innerWidth < 1050){
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 0.65,
                duration: 100,
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 0,
                duration: 100,
                delay: 0,
                onComplete: () => {
                    if (headCoin1.texture.key === 'headcoin') {
                        headCoin1.setTexture('tailcoin')
                    }
                    else {
                        headCoin1.setTexture('headcoin')
                    }
                }
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 0.65,
                duration: 100
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 0.65,
                duration: 100
            })

            timeline.play()
        }
        else{
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 1,
                duration: 30,
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 0,
                duration: 30,
                delay: 0,
                onComplete: () => {
                    if (headCoin1.texture.key === 'headcoin') {
                        headCoin1.setTexture('tailcoin')
                    }
                    else {
                        headCoin1.setTexture('headcoin')
                    }
                }
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 1,
                duration: 30
            })

            timeline.add({
                targets: headCoin1,
                scaleX: 1,
                duration: 30
            })

            timeline.play()
        }
        
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
}