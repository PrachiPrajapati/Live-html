const cards = [];
var bg;
var logo, home;
var gamePanel;
var helpButton;
var minimumButton;
var divideButton;
var multiplyButton;
var maximumButton;
var soundButton;
var music;
var soundStatus = 0;
var card1;
var card2;
var card3;
var timeline;
var defaultAmount = 800;
var betAmount = (Math.floor(defaultAmount * 100) / 100).toFixed(2);
var halfBet, flipButton, betText, betValueBg, betValue, minmaxText;
var x2text;
var dividetext;
var minbuttontext;
var maxbuttontext;

var coinValue1;
var coinValue2;
var coinValue3;
var coinValue4;
var coinValue5;
var coinValue6;
var coinValue7;
var coinValue8;
var coinValue9;
var coinValue10;

var betValue1;
var betValue2;
var betValue3;
var betValue4;
var betValue5;
var betValue6;
var betValue7;
var betValue8;
var betValue9;
var betValue10;

var profitValue1;
var profitValue2;
var profitValue3;
var profitValue4;
var profitValue5;
var profitValue6;
var profitValue7;
var profitValue8;
var profitValue9;
var profitValue10;

var historytableTitle;
var closeimg;
var popupimg


class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
    }

    preload() {
        //Music
        // this.load.audio('music','assets/sounds/music.mp3');

        //Background
        // this.load.image('bg', 'assets/images/ui/bg.png');

        //Header
        this.load.image('logo','assets/images/ui/logo.png');
        this.load.image('homeicon', 'assets/images/ui/home-icon.png');
        this.load.image('gamePanel','assets/images/ui/panel.png');
        this.load.image('mobilepanel','assets/images/ui/mobile-panel.png');
        this.load.image('mainCard','assets/images/ui/main-card.png');
        this.load.image('cardGlow', 'assets/images/ui/glow.png');
        this.load.image('recentbeticon', 'assets/images/ui/recent-bet-btn.png');
        this.load.image('popupimg', 'assets/images/ui/popup-img.png');
        this.load.image('closeimg', 'assets/images/ui/close.png');
        
        //Footer
        this.load.image('totalBetText','assets/images/ui/total-bet-text.png');
        this.load.image('footerPanel','assets/images/ui/ui-panel.png');
        this.load.image('helpButton','assets/images/ui/help.png');
        this.load.image('squareButton','assets/images/ui/square.png');
        this.load.image('circleButton','assets/images/ui/circle.png');
        this.load.image('rectangleButton','assets/images/ui/rectangle.png');
        this.load.image('soundOn','assets/images/ui/sound-on.png');
        this.load.image('soundOff','assets/images/ui/sound-off.png');

        //Right
        this.load.image('provablyFair','assets/images/ui/provably-fair.png');
        this.load.image('copyButton','assets/images/ui/copy.png');
        this.load.image('historyBets','assets/images/ui/history-bets.png');
        this.load.image('card1','assets/images/cards/Card-1.png');
        this.load.image('card2','assets/images/cards/Card-2.png');
        this.load.image('card3','assets/images/cards/Card-3.png');
        
        //Cards using Function
        this.LoadCards();
    }

    LoadCards()
    {
        for(var i=0; i<52; i++) {
            cards[i] = this.load.image('card'+(i+1), 'assets/images/cards/Card-'+(i+1)+'.png');
        }
    }

    create()
    {
        //Static UI
        this.add.image(960, 540, 'bg');
        var mainpanel = this.add.image(723, 443, 'gamePanel');
        var mobilepanel = this.add.image(360, 465, 'mobilepanel').setScale(0);

        //Glow - Disable the Glow of the Cards which are not Clicked by the User
        this.add.image(325, 500, 'cardGlow').setScale(0);
        this.add.image(725, 500, 'cardGlow').setScale(0);
        this.add.image(1125, 500, 'cardGlow').setScale(0);



        logo = this.add.image(723, 102, 'logo');
        home = this.add.image(60,120, 'homeicon');

        var recentbetbtn = this.add.image(630,100, 'recentbeticon')
                            .setScale(0)
                            .setInteractive({   useHandCursor: true })
                            .on('pointerdown', () => { 
                                game.scene.scenes[0].openpopup();
                             });
        var footerpanel = this.add.image(723, 938, 'footerPanel');
        var totalBetText = this.add.image(725, 856, 'totalBetText');
        this.add.image(1681, 154, 'provablyFair');
        this.add.image(1681, 635, 'historyBets');
        var footerpanel2= this.add.image(370,1100, 'footerPanel').setScale(0); 
        //Interactable UI
        //Help Button
        helpButton = this.add.image(239, 939, 'helpButton')
        .setInteractive({   useHandCursor: true });

        helpButton.on('pointerdown', () => {
            helpButton.setScale(0.8); 
        });

        helpButton.on('pointerup', () => {
            helpButton.setScale(1); 
        });

        //Minimum Button
        minimumButton = this.add.image(373, 938, 'squareButton')
        .setInteractive({   useHandCursor: true });

        minimumButton.on('pointerdown', () => {
            minimumButton.setScale(0.93);
            betAmount = 0.01;
            betValue.setText(betAmount.toFixed(2)); 
        });
  
        minimumButton.on('pointerup', () => {
            minimumButton.setScale(1); 
        });

        //Divide by 2
        divideButton = this.add.image(511, 938, 'circleButton')
        .setInteractive({   useHandCursor: true });

        divideButton.on('pointerdown', () => {
            divideButton.setScale(0.93);
            betAmount = betAmount / 2;
            betValue.setText(betAmount.toFixed(2)); 
        });
  
        divideButton.on('pointerup', () => {
            divideButton.setScale(1); 
        });

        //Bet Amount - Not Interactable
        var footerractanglebg = this.add.image(723, 938, 'rectangleButton');
        
        //Multiply by 2
        multiplyButton = this.add.image(935, 938, 'circleButton')
        .setInteractive({   useHandCursor: true });

        multiplyButton.on('pointerdown', () => {
            multiplyButton.setScale(0.93);
            betAmount = betAmount * 2;
            betValue.setText(betAmount.toFixed(2)); 
        });
  
        multiplyButton.on('pointerup', () => {
            multiplyButton.setScale(1);
        });

        //Maximum Button
        maximumButton = this.add.image(1073, 938, 'squareButton')
        .setInteractive({   useHandCursor: true });

        maximumButton.on('pointerdown', () => {
            maximumButton.setScale(0.93); 
            betAmount = 1000;
            betValue.setText(betAmount);
        });
  
        maximumButton.on('pointerup', () => {
            maximumButton.setScale(1);
        });
        x2text = this.add.text(935, 938, "X2",{ fontSize: '45px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
        dividetext = this.add.text(511, 938, "/2",{ fontSize: '45px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
        minbuttontext = this.add.text(373, 938, "MIN",{ fontSize: '40px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
        maxbuttontext = this.add.text(1073, 938, "MAX",{ fontSize: '40px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);

        //Sound Add
        // music = this.sound.add('music');
        // music.play();
        // music.loop = true;
        soundButton = this.add.image(1207, 938, 'soundOn')
        .setInteractive({   useHandCursor: true });

        //Sound - Bool Toggle On to Off
        // if(soundStatus == 0)
        // {
        //     soundButton.on('pointerdown', () => {
        //         music.pause();
        //         soundButton = this.add.image(1207, 938, 'soundOff');
        //         soundStatus == 1;
        //     });
        // }

        //Sound - Bool Toggle Off to On
        // if(soundStatus == 1)
        // {
        //     soundButton.on('pointerdown', () => {
        //         music.resume();
        //         soundButton = this.add.image(1207, 938, 'soundOn');
        //         soundStatus == 0;
        //     });
        // }
               
        //Main Cards
        // game.scene.scenes[0].flip(card1);
        
        card1 = this.add.image(325, 500, 'mainCard')
                .setInteractive({   useHandCursor: true })
                .on('pointerdown', () => { 
                    // this.flip(card1);
                     card1.input.enabled = false;
                    card2.input.enabled = false;
                    card3.input.enabled = false;
                    game.scene.scenes[0].flip(card1);
                     
                setTimeout(function(){    
                   game.scene.scenes[0].flip1(card2);
                   game.scene.scenes[0].flip2(card3);
                }, 3000);
                setTimeout(function(){    
                   game.scene.scenes[0].flip(card1);
                   game.scene.scenes[0].flip1(card2);
                   game.scene.scenes[0].flip2(card3);
                }, 5000);
                setTimeout(function(){ 
                    if (getWidth() < 1050) {
                        game.scene.scenes[0].anim2();
                    }
                    else{
                        game.scene.scenes[0].anim();
                    }
                    
                }, 7000);
                setTimeout(function(){ 
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                }, 8500);

            });
        card2 = this.add.image(725, 500, 'mainCard')
                .setInteractive({   useHandCursor: true })
                .on('pointerdown', () => { 
                    // this.flip(card1);
                    card1.input.enabled = false;
                    card2.input.enabled = false;
                    card3.input.enabled = false;
                    game.scene.scenes[0].flip1(card2);
                     
                setTimeout(function(){    
                   game.scene.scenes[0].flip(card1);
                   game.scene.scenes[0].flip2(card3);
                }, 3000);
                setTimeout(function(){    
                   game.scene.scenes[0].flip(card1);
                   game.scene.scenes[0].flip1(card2);
                   game.scene.scenes[0].flip2(card3);
                }, 5000);
                setTimeout(function(){ 
                    if (getWidth() < 1050) {
                        game.scene.scenes[0].anim2();
                    }
                    else{
                        game.scene.scenes[0].anim();
                    }
                    
                }, 7000);
                setTimeout(function(){ 
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                }, 8500);

            });
        card3 =this.add.image(1125, 500, 'mainCard')
                .setInteractive({   useHandCursor: true })
                    .on('pointerdown', () => { 
                        card1.input.enabled = false;
                        card2.input.enabled = false;
                        card3.input.enabled = false;
                        game.scene.scenes[0].flip2(card3);
                    
                    
                    setTimeout(function(){
                       game.scene.scenes[0].flip1(card2);
                       game.scene.scenes[0].flip(card1);
                    }, 3000);

                    setTimeout(function(){    
                       game.scene.scenes[0].flip(card1);
                       game.scene.scenes[0].flip1(card2);
                       game.scene.scenes[0].flip2(card3);
                    }, 5000);
                    setTimeout(function(){ 
                        if (getWidth() < 1050) {
                            game.scene.scenes[0].anim2();
                        }
                        else{
                            game.scene.scenes[0].anim();
                        }
                        
                    }, 7000);
                    setTimeout(function(){ 
                        card1.input.enabled = true;
                        card2.input.enabled = true;
                        card3.input.enabled = true;
                    }, 8500);

                });
        betValue = this.add.text(716, 937, betAmount, { fontSize: '63px', fill: '#014156', fontFamily: "AllerDisplay" });        
        betValue.setOrigin(0.5);

        //History Table
        popupimg = this.add.image(360, 580, 'popupimg').setScale(0);
        closeimg = this.add.image(630, 180, 'closeimg').setScale(0)
        .setInteractive({   useHandCursor: true })
        .on('pointerdown', () => { 
            game.scene.scenes[0].closepopup();
         });
        historytableTitle = this.add.text(1525, 345, 'GAME        BET        PROFIT', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // coin static value
        coinValue1 = this.add.text(1525, 400, 'Card 1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue2 = this.add.text(1525, 440, 'Card 2', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue3 = this.add.text(1525, 480, 'Card 1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue4 = this.add.text(1525, 520, 'Card 3', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue5 = this.add.text(1525, 560, 'Card 1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue6 = this.add.text(1525, 600, 'Card 3', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue7 = this.add.text(1525, 640, 'Card 2', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue8 = this.add.text(1525, 680, 'Card 1', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue9 = this.add.text(1525, 720, 'Card 3', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        coinValue10 = this.add.text(1525, 760, 'Card 3', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // bet static value
        betValue1 = this.add.text(1655, 400, '800', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue2 = this.add.text(1655, 440, '0.01', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue3 = this.add.text(1655, 480, '400', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue4 = this.add.text(1655, 520, '200.00', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue5 = this.add.text(1655, 560, '400.00', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue6 = this.add.text(1655, 600, '200', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue7 = this.add.text(1655, 640, '600', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue8 = this.add.text(1655, 680, '800', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue9 = this.add.text(1655, 720, '6.25', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        betValue10 = this.add.text(1655, 760, '12.50', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);

        // profit static value
        profitValue1 = this.add.text(1735, 400, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue2 = this.add.text(1735, 440, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue3 = this.add.text(1735, 480, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue4 = this.add.text(1735, 520, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue5 = this.add.text(1735, 560, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue6 = this.add.text(1735, 600, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue7 = this.add.text(1735, 640, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue8 = this.add.text(1735, 680, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue9 = this.add.text(1735, 720, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });
        profitValue10 = this.add.text(1735, 760, '100', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });


        if (getWidth() < 1050) {

            home.setPosition(80, 50);

            footerpanel.setPosition(370,990);
            footerpanel.setScale(0.45);
            footerpanel2.setScale(0.45)
            minimumButton.setScale(0.7);
            minimumButton.setPosition(220,1105);
            minimumButton.on('pointerdown', () => {
                minimumButton.setScale(0.65);
            });
            minimumButton.on('pointerup', () => {
                minimumButton.setScale(0.7); 
            });
            divideButton.setScale(0.75);
            divideButton.setPosition(320,1105);
            divideButton.on('pointerdown', () => {
                divideButton.setScale(0.7);
            });
            divideButton.on('pointerup', () => {
                divideButton.setScale(0.75); 
            });
            multiplyButton.setScale(0.75);
            multiplyButton.setPosition(420,1105);
            multiplyButton.on('pointerdown', () => {
                multiplyButton.setScale(0.7);
            });
            multiplyButton.on('pointerup', () => {
                multiplyButton.setScale(0.75); 
            });
            maximumButton.setScale(0.75);
            maximumButton.setPosition(520,1105);
            maximumButton.on('pointerdown', () => {
                maximumButton.setScale(0.7);
            });
            maximumButton.on('pointerup', () => {
                maximumButton.setScale(0.75); 
            });
            minbuttontext.setPosition(220,1105);
            dividetext.setPosition(320,1105);
            x2text.setPosition(420,1105);
            maxbuttontext.setPosition(520,1105);
            minbuttontext.setStyle({fontSize: '30px'});
            dividetext.setStyle({fontSize: '35px'});
            x2text.setStyle({fontSize: '35px'});
            maxbuttontext.setStyle({fontSize: '35px'});
            footerractanglebg.setPosition(370,990);
            footerractanglebg.setScale(0.8);
            betValue.setPosition(370,990);
            betValue.setStyle({fontSize: '50px'});
            helpButton.setScale(0.75);
            helpButton.setPosition(180,990);
            soundButton.setScale(0.75);
            soundButton.setPosition(580,990);
            logo.setScale(0.7);
            logo.setPosition(355,90);
            card1.setScale(0.6);
            card2.setScale(0.6);
            card3.setScale(0.6);
            card1.setPosition(220,340);
            card2.setPosition(520,340);
            card3.setPosition(370,680);
            mainpanel.setScale(0);
            mobilepanel.setScale(1);
            totalBetText.setPosition(370,920);
            popupimg.setScale(0);

            coinValue1.setScale(0)
            coinValue2.setScale(0)
            coinValue3.setScale(0)
            coinValue4.setScale(0)
            coinValue5.setScale(0)
            coinValue6.setScale(0)
            coinValue7.setScale(0)
            coinValue8.setScale(0)
            coinValue9.setScale(0)
            coinValue10.setScale(0)

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
            historytableTitle.setScale(0);

            historytableTitle.setPosition(150,310);
            historytableTitle.setText('GAME                      BET                      PROFIT')

            coinValue1.setPosition(150,380);
            coinValue2.setPosition(150,430);
            coinValue3.setPosition(150,480);
            coinValue4.setPosition(150,530);
            coinValue5.setPosition(150,580);
            coinValue6.setPosition(150,630);
            coinValue7.setPosition(150,680);
            coinValue8.setPosition(150,730);
            coinValue9.setPosition(150,780);
            coinValue10.setPosition(150,830);

            betValue1.setPosition(350,380);
            betValue2.setPosition(350,430);
            betValue3.setPosition(350,480);
            betValue4.setPosition(350,530);
            betValue5.setPosition(350,580);
            betValue6.setPosition(350,630);
            betValue7.setPosition(350,680);
            betValue8.setPosition(350,730);
            betValue9.setPosition(350,780);
            betValue10.setPosition(350,830);

            profitValue1.setPosition(500,380);
            profitValue2.setPosition(500,430);
            profitValue3.setPosition(500,480);
            profitValue4.setPosition(500,530);
            profitValue5.setPosition(500,580);
            profitValue6.setPosition(500,630);
            profitValue7.setPosition(500,680);
            profitValue8.setPosition(500,730);
            profitValue9.setPosition(500,780);
            profitValue10.setPosition(500,830);

            recentbetbtn.setScale(1)



        }

    }



    openpopup(){
        coinValue1.setScale(1)
        coinValue2.setScale(1)
        coinValue3.setScale(1)
        coinValue4.setScale(1)
        coinValue5.setScale(1)
        coinValue6.setScale(1)
        coinValue7.setScale(1)
        coinValue8.setScale(1)
        coinValue9.setScale(1)
        coinValue10.setScale(1)

        betValue1.setScale(1);
        betValue2.setScale(1);
        betValue3.setScale(1);
        betValue4.setScale(1);
        betValue5.setScale(1);
        betValue6.setScale(1);
        betValue7.setScale(1);
        betValue8.setScale(1);
        betValue9.setScale(1);
        betValue10.setScale(1);

        profitValue1.setScale(1);
        profitValue2.setScale(1);
        profitValue3.setScale(1);
        profitValue4.setScale(1);
        profitValue5.setScale(1);
        profitValue6.setScale(1);
        profitValue7.setScale(1);
        profitValue8.setScale(1);
        profitValue9.setScale(1);
        profitValue10.setScale(1);

        historytableTitle.setScale(1);
        closeimg.setScale(1);
        popupimg.setScale(1.1, 0.8);
        closeimg.setScale(1);
    }

    closepopup(){
        coinValue1.setScale(0)
        coinValue2.setScale(0)
        coinValue3.setScale(0)
        coinValue4.setScale(0)
        coinValue5.setScale(0)
        coinValue6.setScale(0)
        coinValue7.setScale(0)
        coinValue8.setScale(0)
        coinValue9.setScale(0)
        coinValue10.setScale(0)

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

        historytableTitle.setScale(0);
        closeimg.setScale(0);
        popupimg.setScale(0);
    }

    anim() {
        var tween1 = this.tweens.add({
            targets: card1,
            props: {
                x: { value: '725', duration: 200, ease: 'Power1' },
                y: { value: '500', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween2 = game.scene.scenes[0].tweens.add({
                    targets: card1,
                    props: {
                        x: { value: '325', duration: 200, ease: 'Power1' },
                        y: { value: '500', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween3 = game.scene.scenes[0].tweens.add({
                            targets: card1,
                            props: {
                                x: { value: '1125', duration: 200, ease: 'Power1' },
                                y: { value: '500', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween4 = game.scene.scenes[0].tweens.add({
                                    targets: card1,
                                    props: {
                                        x: { value: '325', duration: 200, ease: 'Power1' },
                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween5 = game.scene.scenes[0].tweens.add({
                                            targets: card1,
                                            props: {
                                                x: { value: '725', duration: 200, ease: 'Power1' },
                                                y: { value: '500', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween6 = game.scene.scenes[0].tweens.add({
                                                    targets: card1,
                                                    props: {
                                                        x: { value: '1125', duration: 200, ease: 'Power1' },
                                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });

        var tween11 = this.tweens.add({
            targets: card2,
            props: {
                x: { value: '1125', duration: 200, ease: 'Power1' },
                y: { value: '500', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween12 = game.scene.scenes[0].tweens.add({
                    targets: card2,
                    props: {
                        x: { value: '725', duration: 200, ease: 'Power1' },
                        y: { value: '500', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween13 = game.scene.scenes[0].tweens.add({
                            targets: card2,
                            props: {
                                x: { value: '325', duration: 200, ease: 'Power1' },
                                y: { value: '500', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween14 = game.scene.scenes[0].tweens.add({
                                    targets: card2,
                                    props: {
                                        x: { value: '725', duration: 200, ease: 'Power1' },
                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween15 = game.scene.scenes[0].tweens.add({
                                            targets: card2,
                                            props: {
                                                x: { value: '1125', duration: 200, ease: 'Power1' },
                                                y: { value: '500', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween16 = game.scene.scenes[0].tweens.add({
                                                    targets: card2,
                                                    props: {
                                                        x: { value: '325', duration: 200, ease: 'Power1' },
                                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });

        var tween21 = this.tweens.add({
            targets: card3,
            props: {
                x: { value: '325', duration: 200, ease: 'Power1' },
                y: { value: '500', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween22 = game.scene.scenes[0].tweens.add({
                    targets: card3,
                    props: {
                        x: { value: '1125', duration: 200, ease: 'Power1' },
                        y: { value: '500', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween23 = game.scene.scenes[0].tweens.add({
                            targets: card3,
                            props: {
                                x: { value: '725', duration: 200, ease: 'Power1' },
                                y: { value: '500', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween24 = game.scene.scenes[0].tweens.add({
                                    targets: card3,
                                    props: {
                                        x: { value: '1125', duration: 200, ease: 'Power1' },
                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween25 = game.scene.scenes[0].tweens.add({
                                            targets: card3,
                                            props: {
                                                x: { value: '325', duration: 200, ease: 'Power1' },
                                                y: { value: '500', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween24 = game.scene.scenes[0].tweens.add({
                                                    targets: card3,
                                                    props: {
                                                        x: { value: '725', duration: 200, ease: 'Power1' },
                                                        y: { value: '500', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });
    }
    anim2() {
        var tween1 = this.tweens.add({
            targets: card1,
            props: {
                x: { value: '520', duration: 200, ease: 'Power1' },
                y: { value: '340', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween2 = game.scene.scenes[0].tweens.add({
                    targets: card1,
                    props: {
                        x: { value: '370', duration: 200, ease: 'Power1' },
                        y: { value: '680', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween3 = game.scene.scenes[0].tweens.add({
                            targets: card1,
                            props: {
                                x: { value: '220', duration: 200, ease: 'Power1' },
                                y: { value: '340', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween4 = game.scene.scenes[0].tweens.add({
                                    targets: card1,
                                    props: {
                                        x: { value: '520', duration: 200, ease: 'Power1' },
                                        y: { value: '340', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween5 = game.scene.scenes[0].tweens.add({
                                            targets: card1,
                                            props: {
                                                x: { value: '370', duration: 200, ease: 'Power1' },
                                                y: { value: '680', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween6 = game.scene.scenes[0].tweens.add({
                                                    targets: card1,
                                                    props: {
                                                        x: { value: '220', duration: 200, ease: 'Power1' },
                                                        y: { value: '340', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });

        var tween11 = this.tweens.add({
            targets: card2,
            props: {
                x: { value: '370', duration: 200, ease: 'Power1' },
                y: { value: '680', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween12 = game.scene.scenes[0].tweens.add({
                    targets: card2,
                    props: {
                        x: { value: '220', duration: 200, ease: 'Power1' },
                        y: { value: '340', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween13 = game.scene.scenes[0].tweens.add({
                            targets: card2,
                            props: {
                                x: { value: '520', duration: 200, ease: 'Power1' },
                                y: { value: '340', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween14 = game.scene.scenes[0].tweens.add({
                                    targets: card2,
                                    props: {
                                        x: { value: '370', duration: 200, ease: 'Power1' },
                                        y: { value: '680', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween15 = game.scene.scenes[0].tweens.add({
                                            targets: card2,
                                            props: {
                                                x: { value: '220', duration: 200, ease: 'Power1' },
                                                y: { value: '340', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween16 = game.scene.scenes[0].tweens.add({
                                                    targets: card2,
                                                    props: {
                                                        x: { value: '520', duration: 200, ease: 'Power1' },
                                                        y: { value: '340', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });

        var tween21 = this.tweens.add({
            targets: card3,
            props: {
                x: { value: '220', duration: 200, ease: 'Power1' },
                y: { value: '340', duration: 200, ease: 'Power1' }
            },
            delay: 0,
            onComplete:function(){
                var tween22 = game.scene.scenes[0].tweens.add({
                    targets: card3,
                    props: {
                        x: { value: '520', duration: 200, ease: 'Power1' },
                        y: { value: '340', duration: 200, ease: 'Power1' }
                    },
                    onComplete:function(){
                        var tween23 = game.scene.scenes[0].tweens.add({
                            targets: card3,
                            props: {
                                x: { value: '370', duration: 200, ease: 'Power1' },
                                y: { value: '680', duration: 200, ease: 'Power1' }
                            },
                            onComplete:function(){
                                var tween24 = game.scene.scenes[0].tweens.add({
                                    targets: card3,
                                    props: {
                                        x: { value: '220', duration: 200, ease: 'Power1' },
                                        y: { value: '340', duration: 200, ease: 'Power1' }
                                    },
                                    onComplete:function(){
                                        var tween25 = game.scene.scenes[0].tweens.add({
                                            targets: card3,
                                            props: {
                                                x: { value: '520', duration: 200, ease: 'Power1' },
                                                y: { value: '340', duration: 200, ease: 'Power1' }
                                            },
                                            onComplete:function(){
                                                var tween24 = game.scene.scenes[0].tweens.add({
                                                    targets: card3,
                                                    props: {
                                                        x: { value: '370', duration: 200, ease: 'Power1' },
                                                        y: { value: '680', duration: 200, ease: 'Power1' }
                                                    },
                                                });
                                             }
                                        });
                                     }
                                });
                             }
                        });
                     }
                });
             }
        });
    }

    flip(card1) {

            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })
            if (getWidth() < 1050) {
                timeline.add({
                    targets: card1,
                    scale: 0.61,
                    duration: 300,
                })
            }
            else{
                timeline.add({
                    targets: card1,
                    scale: 1.01,
                    duration: 300,
                })
            }
            
            timeline.add({
                targets: card1,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if(card1.texture.key === 'mainCard')
                    {
                        card1.setTexture('card1')
                    }
                    else{
                        card1.setTexture('mainCard')
                    }
                }
            })
            if (getWidth() < 1050) {
                timeline.add({
                    targets: card1,
                    scaleX: 0.61,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card1,
                    scaleX: 1.01,
                    duration: 300
                })
            }
            if (getWidth() < 1050) {
                timeline.add({
                    targets: card1,
                    scale: 0.6,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card1,
                    scale: 1,
                    duration: 300
                })
            }

            

            

            timeline.play()
        }
    flip1(card2) {

            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })
            if (getWidth() < 1050) {
                timeline.add({
                    targets: card2,
                    scale: 0.61,
                    duration: 300,
                })
            }
            else{
                timeline.add({
                    targets: card2,
                    scale: 1.01,
                    duration: 300,
                })
            }

            

            timeline.add({
                targets: card2,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if(card2.texture.key === 'mainCard')
                    {
                        card2.setTexture('card46')
                    }
                    else{
                        card2.setTexture('mainCard')
                    }
                }
            })

            if (getWidth() < 1050) {
                timeline.add({
                    targets: card2,
                    scaleX: 0.61,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card2,
                    scaleX: 1.01,
                    duration: 300
                })
            }

            if (getWidth() < 1050) {
                timeline.add({
                    targets: card2,
                    scale: 0.6,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card2,
                    scale: 1,
                    duration: 300
                })
            }

            

            

            timeline.play()
        }
    flip2(card3) {

            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            if (getWidth() < 1050) {
                timeline.add({
                    targets: card3,
                    scale: 0.61,
                    duration: 300,
                })
            }
            else{
                timeline.add({
                    targets: card3,
                    scale: 1.01,
                    duration: 300,
                })
            }

            timeline.add({
                targets: card3,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if(card3.texture.key === 'mainCard')
                    {
                        card3.setTexture('card3')
                    }
                    else{
                        card3.setTexture('mainCard')
                    }
                }
            })

            if (getWidth() < 1050) {
                timeline.add({
                    targets: card3,
                    scaleX: 0.61,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card3,
                    scaleX: 1.01,
                    duration: 300
                })
            }

            if (getWidth() < 1050) {
                timeline.add({
                    targets: card3,
                    scale: 0.6,
                    duration: 300
                })
            }
            else{
                timeline.add({
                    targets: card3,
                    scale: 1,
                    duration: 300
                })
            }

            timeline.play()
        }
    update()
    {
        if(soundButton.on('pointerdown', () => {
            this.setSound();
        }));
        if (betAmount >= 1000) {
            minimumButton.input.enabled = true;
            divideButton.input.enabled = true;
            minimumButton.setAlpha(1);
            divideButton.setAlpha(1);
            maximumButton.input.enabled = false;
            multiplyButton.input.enabled = false;
            maximumButton.setAlpha(0.7);
            multiplyButton.setAlpha(0.7);
            betAmount = 1000;
            betValue.setText(betAmount);
        }
        else if (betAmount <= 0.01) {
            maximumButton.input.enabled = true;
            multiplyButton.input.enabled = true;
            maximumButton.setAlpha(1);
            multiplyButton.setAlpha(1);
            minimumButton.input.enabled = false;
            divideButton.input.enabled = false;
            minimumButton.setAlpha(0.7);
            divideButton.setAlpha(0.7);
            betAmount = 0.01;
            betValue.setText(betAmount);
        }
        else {
            maximumButton.input.enabled = true;
            multiplyButton.input.enabled = true;
            maximumButton.setAlpha(1);
            multiplyButton.setAlpha(1);
            minimumButton.input.enabled = true;
            divideButton.input.enabled = true;
            minimumButton.setAlpha(1);
            divideButton.setAlpha(1);
        }
    }

    setSound()
    {
        if(soundStatus == 0)
        {
            // music.pause();
            soundButton = this.add.image(1207, 938, 'soundOff');
            soundStatus = 1;
        }
        else
        {
            // music.resume();
            soundButton = this.add.image(1207, 938, 'soundOn');
            soundStatus = 0;
        }
    }
}