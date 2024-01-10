var betnumber = 6;
var betText;
var upbutton;
var downbutton;
var rolllbtn;
var minusbtn;
var plusbtn;
var minbtn;
var maxbtn;
var betamountText;
let betamount= 5.45;
var dice;
var dice2;
var glassimg;
var scoreheading;
var sccorebtnflg;
var popupbg;

var scoredescbet1; 
var scoredescmult1; 
var scoredescgame1; 
var scoredescroll1;
var profitimg1; 
var scoredescrprofit1;

var scoredescbet2; 
var scoredescmult2; 
var scoredescgame2; 
var scoredescroll2;
var profitimg2; 
var scoredescrprofit2;

var scoredescbet3; 
var scoredescmult3; 
var scoredescgame3; 
var scoredescroll3;
var profitimg3; 
var scoredescrprofit3;

var scoredescbet4; 
var scoredescmult4; 
var scoredescgame4; 
var scoredescroll4;
var profitimg4; 
var scoredescrprofit4;

var scoredescbet5; 
var scoredescmult5; 
var scoredescgame5; 
var scoredescroll5;
var profitimg5; 
var scoredescrprofit5;

var scoredescbet6; 
var scoredescmult6; 
var scoredescgame6; 
var scoredescroll6;
var profitimg6; 
var scoredescrprofit6;

var scoredescbet7; 
var scoredescmult7; 
var scoredescgame7; 
var scoredescroll7;
var profitimg7; 
var scoredescrprofit7;

var scoredescbet8; 
var scoredescmult8; 
var scoredescgame8; 
var scoredescroll8;
var profitimg8; 
var scoredescrprofit8;

var scoredescbet9; 
var scoredescmult9; 
var scoredescgame9; 
var scoredescroll9;
var profitimg9; 
var scoredescrprofit9;

var scoredescbet10; 
var scoredescmult10; 
var scoredescgame10; 
var scoredescroll10;
var profitimg10; 
var scoredescrprofit10;
var winratiotext; 
var balanceText;
var closebuttn


class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameScene'});
    }
    preload(){
    
        // this.load.image('bg','assets/images/background.png');
        this.load.image('logo','assets/images/logo.png');
        this.load.image('homeicon', 'assets/images/home-icon.png');
        this.load.image('under','assets/images/under.png');
        this.load.image('over','assets/images/over.png');
        this.load.image('underactive','assets/images/under-active.png');
        this.load.image('overactive','assets/images/over-active.png');
        this.load.image('numberbg','assets/images/number-bg.png');
        this.load.image('upnumber','assets/images/up-arrow.png');
        this.load.image('downnumber','assets/images/down-arrow.png');
        this.load.image('glassimg','assets/images/tilted-glass.png');
        this.load.image('soundon','assets/images/soundon.png');
        this.load.image('soundoff','assets/images/soundoff.png');
        this.load.image('rollimg','assets/images/roll-img.png');
        this.load.image('commonbtn','assets/images/common-min-max.png');
        this.load.spritesheet('dice','assets/images/dice-roll-image.png', { frameWidth: 128, frameHeight: 128 });
        this.load.image('dice3','assets/images/dice3.png');
        this.load.image('green','assets/images/green.png');
        this.load.image('red','assets/images/red.png');
        this.load.image('scorebg','assets/images/score-img.png');
        this.load.image('popupbg','assets/images/popup-bg.png');
        this.load.image('close','assets/images/close.png');
        this.load.image('balnkimg','assets/images/close.png');
         
    }
    create(){

        // var bg = this.add.image(800,525,'bg').setScale(1.3);
        var logo = this.add.image(300,175,'logo').setScale(0.8);
        var home = this.add.image(80,70, 'homeicon').setScale(0.5);
        // var blackractangle = this.add.rectangle(960, 1060, 1920, 100, 0x000000);
        // blackractangle.setAlpha(0.3)

        const underbutton = this.add.sprite(750,200,'under')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1.2)
                            .on('pointerdown', () => { 
                                underbutton.setTexture('underactive');  
                                overbutton.setTexture('over');  
                            } );
        const overbutton = this.add.sprite(750,100,'overactive')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1.2)
                            .on('pointerdown', () => { 
                                overbutton.setTexture('overactive');
                                underbutton.setTexture('under');  
                            } );

        var numbg = this.add.image(970,150,'numberbg');

        betText = this.add.text(970,145,betnumber, { fontSize:'80px', fill:'#fff',fontFamily: 'AllerDisplay' });
        betText.setOrigin(0.5);


        upbutton = this.add.sprite(1140,110,'upnumber')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .on('pointerdown', () => { 
                                betnumber += 1;
                                betText.setText(betnumber);
                            } );
        downbutton = this.add.sprite(1140,190,'downnumber')
                            .setInteractive({ useHandCursor: true })
                            .setScale(1)
                            .on('pointerdown', () => { 
                                betnumber -= 1;
                                betText.setText(betnumber);
                                
                            } );

        winratiotext = this.add.text(965,260,"1.5x",{ fontSize:'30px', fill:'#fff',fontFamily: 'AllerDisplay'}).setOrigin(0.5)



        const soundon = this.add.sprite(1820,80,'soundon')
                        .setInteractive({ useHandCursor: true })
                        .on('pointerdown', () => { 
                                soundon.setScale(0);
                                soundoff.setScale(1);
                                
                            } );
        const soundoff = this.add.sprite(1820,80,'soundoff')
                        .setInteractive({ useHandCursor: true })
                        .on('pointerdown', () => { 
                                soundoff.setScale(0);
                                soundon.setScale(1);
                                
                            } );
        soundoff.setScale(0);


        var winText = this.add.text(840,725,"WIN 1.68 FUN", { fontSize:'43px', fill:'#fff',fontFamily: 'AllerDisplay'});

        

        glassimg = this.add.image(1670,970,'glassimg');
        glassimg.rotation= 50;

        var maxbet = this.add.text(360,1035,"Max Bet 100.00 FUN", { fontSize:'22px', fill:'#fff',fontFamily: 'AllerDisplay'});


        betamountText = this.add.text(980,1045, betamount + " Fun", { fontSize:'22px', fill:'#fff',fontFamily: 'AllerDisplay'});
        betamountText.setOrigin(0.5);


        minusbtn = this.add.sprite(750,1045,"commonbtn")
                    .setScale(0.9)
                    .setInteractive({ useHandCursor: true })
                    .on('pointerdown', () => { 
                        betamount -= 1;
                        betamountText.setText(betamount + " Fun");
                        
                    });
        var minusbtnText = this.add.text(738,1022,"-",{ fontSize:'42px', fill:'#fff'});

        plusbtn = this.add.sprite(1100,1045,"commonbtn")
                    .setScale(0.9)
                    .setInteractive({ useHandCursor: true })
                    .on('pointerdown', () => { 
                        betamount += 1;
                        betamountText.setText(betamount + " Fun");
                        
                    });
        var plusbtnText = this.add.text(1088,1027,"+",{ fontSize:'35px', fill:'#fff'});

        minbtn = this.add.sprite(860,1045,"commonbtn")
                .setScale(0.9)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => { 
                    betamount = 1;
                    betamountText.setText(betamount + " Fun");
                    
                });
        var minbtnText = this.add.text(860,1045,"Min",{ fontSize:'22px', fill:'#fff',fontFamily: 'AllerDisplay'});
        minbtnText.setOrigin(0.5);

        maxbtn = this.add.sprite(1210,1045,"commonbtn")
                .setScale(0.9)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => { 
                    betamount = 100;
                    betamountText.setText(betamount + " Fun");
                    
                });
        var maxbtnText = this.add.text(1210,1045,"Max",{ fontSize:'22px', fill:'#fff',fontFamily: 'AllerDisplay'});
        maxbtnText.setOrigin(0.5);

        
        dice = this.add.sprite(1525, 875, 'dice');
        dice2 = this.add.sprite(1620,805, 'dice');
        var outputdice = this.add.image(1000,600,'dice3');
        var outputdice2 = this.add.image(1150,400,'dice3');
        outputdice.setScale(0);
        outputdice2.setScale(0);

         dice.rotation =  45;
         dice2.rotation =  45;
         outputdice.rotation = 45;
         outputdice2.rotation = 45;

        this.anims.create({
            key: 'dice',
            frames: this.anims.generateFrameNumbers('dice', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1,

        });
        dice.setScale(0); 
        dice2.setScale(0); 
        
        var dicecount = 1;

        balanceText = this.add.text(350,950,"Balance : 1000 Fun",{ fontSize:'30px', fill:'#fff',fontFamily: 'AllerDisplay'}).setOrigin(0.5);

        

        rolllbtn = this.add.sprite(970,880,'rollimg')
                    .setInteractive({ useHandCursor: true })
                    .on('pointerdown', () => { 
                        dice.setPosition(1525, 875);
                        dice2.setPosition(1620,805);
                        // dice.setScale(0); 
                        // dice2.setScale(0); 
                        outputdice.setScale(0);
                        outputdice2.setScale(0);
                        setTimeout(function(){ 
                            dice.setScale(0.8); 
                            dice2.setScale(0.8); 
                            
                        }, 1000);
                        dice.anims.play('dice', true);
                        setTimeout(function(){ 
                           dice.anims.play('dice', true);
                           dice2.anims.play('dice', true);
                        }, 1000);

                        if (getWidth() > 1050) {
                            if (dicecount == 1) {
                                outputdice.setPosition(1000,600);
                                outputdice2.setPosition(1150,400);
                            }
                            else if (dicecount == 2) {
                                outputdice.setPosition(1050,550);
                                outputdice2.setPosition(1200,500);
                            }
                            else if (dicecount == 3) {
                                outputdice.setPosition(950,600);
                                outputdice2.setPosition(1150,600);
                            }

                            if (dicecount == 1) {
                                var dicetwwen = this.tweens.add({
                                    targets: dice,
                                    delay : 1000,
                                    props: {
                                        x: { value: '1000', duration: 2000, ease: 'Power1' },
                                        y: { value: '600', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                var dice2twwen = this.tweens.add({
                                    targets: dice2,
                                    delay : 1000,
                                    props: {
                                        x: { value: '1150', duration: 2000, ease: 'Power1' },
                                        y: { value: '400', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                dicecount +=1;
                            }
                            else if (dicecount == 2) {
                                var dicetwwen = this.tweens.add({
                                    targets: dice,
                                    delay : 1000,
                                    props: {
                                        x: { value: '1050', duration: 2000, ease: 'Power1' },
                                        y: { value: '550', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                var dice2twwen = this.tweens.add({
                                    targets: dice2,
                                    delay : 1000,
                                    props: {
                                        x: { value: '1200', duration: 2000, ease: 'Power1' },
                                        y: { value: '500', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                dicecount +=1;
                            }
                            else if (dicecount == 3) {
                                var dicetwwen = this.tweens.add({
                                    targets: dice,
                                    delay : 1000,
                                    props: {
                                        x: { value: '950', duration: 2000, ease: 'Power1' },
                                        y: { value: '600', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                var dice2twwen = this.tweens.add({
                                    targets: dice2,
                                    delay : 1000,
                                    props: {
                                        x: { value: '1150', duration: 2000, ease: 'Power1' },
                                        y: { value: '600', duration: 2000, ease: 'Power1' }
                                    },

                                });
                                dicecount = 1;
                            }
                        }
                        
                        var rotation = setInterval(function() {
                            dice.rotation += 120;
                            dice2.rotation += 120;
                        }, 100);
                        

                        setTimeout(function(){ 
                           dice.setScale(0);
                           dice2.setScale(0);
                           outputdice.setScale(0.8);
                           outputdice2.setScale(0.8);
                           clearInterval(rotation);
                        }, 3000);

                        

                        var shaketween1 = this.tweens.add({
                            targets :glassimg,
                            angle : 5,
                            ease: 'Linear',
                            duration: 180,
                            repeat: 0,
                            yoyo: false,
                            onComplete:function(){shaketween1.remove(),game.scene.scenes[0].shake1()}
                        });
                    });
         var rollbtntext = this.add.text(940,960,"Roll", { fontSize:'32px', fill:'#fff',fontFamily: 'AllerDisplay'});

        popupbg = this.add.image(360,615, "popupbg").setScale(0);
        

        scoreheading = this.add.text(65,350,"Bet           Multiplier           Game           Roll           Profit(FUN)", { fontSize:'22px', fill:'#fff',fontFamily: 'AllerDisplay' });

        // Data Row 1
        scoredescbet1 = this.add.text(65,400,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult1 = this.add.text(200,400,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame1 = this.add.text(340,400,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll1 = this.add.text(450,400,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg1 = this.add.image(580,415,"green");
        scoredescrprofit1 = this.add.text(575,400,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 2

        scoredescbet2 = this.add.text(65,450,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult2 = this.add.text(200,450,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame2 = this.add.text(340,450,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll2 = this.add.text(450,450,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg2 = this.add.image(580,465,"red");
        scoredescrprofit2 = this.add.text(575,450,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 3

        scoredescbet3 = this.add.text(65,500,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult3 = this.add.text(200,500,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame3 = this.add.text(340,500,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll3 = this.add.text(450,500,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg3 = this.add.image(580,515,"green");
        scoredescrprofit3 = this.add.text(575,500,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 4

        scoredescbet4 = this.add.text(65,550,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult4 = this.add.text(200,550,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame4 = this.add.text(340,550,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll4 = this.add.text(450,550,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg4 = this.add.image(580,565,"red");
        scoredescrprofit4 = this.add.text(575,550,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 5

        scoredescbet5 = this.add.text(65,600,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult5 = this.add.text(200,600,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame5 = this.add.text(340,600,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll5 = this.add.text(450,600,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg5 = this.add.image(580,615,"green");
        scoredescrprofit5 = this.add.text(575,600,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 6
        scoredescbet6 = this.add.text(65,650,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult6 = this.add.text(200,650,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame6 = this.add.text(340,650,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll6 = this.add.text(450,650,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg6 = this.add.image(580,665,"green");
        scoredescrprofit6 = this.add.text(575,650,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 7

        scoredescbet7 = this.add.text(65,700,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult7 = this.add.text(200,700,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame7 = this.add.text(340,700,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll7 = this.add.text(450,700,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg7 = this.add.image(580,715,"red");
        scoredescrprofit7 = this.add.text(575,700,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 8

        scoredescbet8 = this.add.text(65,750,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult8 = this.add.text(200,750,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame8 = this.add.text(340,750,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll8 = this.add.text(450,750,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg8 = this.add.image(580,765,"green");
        scoredescrprofit8 = this.add.text(575,750,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 9

        scoredescbet9 = this.add.text(65,800,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult9 = this.add.text(200,800,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame9 = this.add.text(340,800,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll9 = this.add.text(450,800,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg9 = this.add.image(580,815,"red");
        scoredescrprofit9 = this.add.text(575,800,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);

        // Data Row 10

        scoredescbet10 = this.add.text(65,850,"12.0",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' });
        scoredescmult10 = this.add.text(200,850,"1.6X",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescgame10 = this.add.text(340,850,"Over6",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        scoredescroll10 = this.add.text(450,850,"12",{ fontSize:'28px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        profitimg10 = this.add.image(580,865,"green");
        scoredescrprofit10 = this.add.text(575,850,"+ 0.68",{ fontSize:'26px', fill:'#fff',fontFamily: 'AllerDisplay' }).setOrigin(0.5, 0);
        
        sccorebtnflg = "true";

        closebuttn = this.add.sprite(675,305,'close')
                            .setInteractive({ useHandCursor: true })
                            .setScale(0)
                            .on('pointerdown', () => { 
                                sccorebtnflg = "false";
                                game.scene.scenes[0].checkscoreflag();
                                
                            } );

        

    if (getWidth() < 1050) {
        logo.setScale(0.5);
        logo.setPosition(250,100);
        home.setPosition(75,100);
        underbutton.setPosition(230,230);
        overbutton.setPosition(230,300);
        underbutton.setScale(0.85);
        overbutton.setScale(0.85);
        soundon.setPosition(650,100);
        soundoff.setPosition(650,100);
        numbg.setPosition(380,265);
        numbg.setScale(0.65);
        betText.setPosition(378,263);
        betText.setStyle({fontSize: '55px'});
        upbutton.setPosition(495,230);
        downbutton.setPosition(495,300);
        upbutton.setScale(0.8);
        downbutton.setScale(0.8);
        // blackractangle.setPosition(96,1150);
        maxbet.setPosition(45,1060);
        maxbet.setStyle({fontSize: '20px'});
        minusbtn.setPosition(225,1140);
        minusbtn.setScale(1);
        minbtn.setPosition(100,1140);
        minbtn.setScale(1);
        minusbtnText.setPosition(215,1120);
        minbtnText.setPosition(100,1140);

        plusbtn.setPosition(520,1140);
        plusbtn.setScale(1);
        maxbtn.setPosition(640,1140);
        maxbtn.setScale(1);
        plusbtnText.setPosition(510,1124);
        maxbtnText.setPosition(640,1140);
        betamountText.setPosition(375,1140);
        betamountText.setStyle({fontSize: '30px'});
        rolllbtn.setPosition(360,950);
        rollbtntext.setPosition(325,1030);
        glassimg.setPosition(640,810);

        glassimg.setScale(0.8);
        outputdice.setPosition(200,450);
        outputdice2.setPosition(350,430);
        winText.setPosition(260,830);
        winText.setStyle({fontSize: '30px'});
        balanceText.setPosition(150,980);
        balanceText.setStyle({fontSize: '25px'});
        winratiotext.setPosition(375,350);

        
        


        rolllbtn.on('pointerdown', () => {

                        dice.setPosition(510, 740);
                        dice2.setPosition(580,690);
                        outputdice.setScale(0);
                        outputdice2.setScale(0);
                        setTimeout(function(){ 
                            dice.setScale(0.65); 
                            dice2.setScale(0.65); 
                            
                        }, 1000);
                        dice.anims.play('dice', true);
                        setTimeout(function(){ 
                           dice.anims.play('dice', true);
                           dice2.anims.play('dice', true);
                        }, 1000);

                        

                        if (dicecount == 1) {
                            outputdice.setPosition(200,450);
                            outputdice2.setPosition(350,430);
                        }
                        else if (dicecount == 2) {
                            outputdice.setPosition(150,450);
                            outputdice2.setPosition(300,400);
                        }
                        else if (dicecount == 3) {
                            outputdice.setPosition(100,450);
                            outputdice2.setPosition(250,410);
                        }

                        if (dicecount == 1) {
                            var dicetwwen = this.tweens.add({
                                targets: dice,
                                delay : 1000,
                                props: {
                                    x: { value: '200', duration: 2000, ease: 'Power1' },
                                    y: { value: '450', duration: 2000, ease: 'Power1' }
                                },

                            });
                            var dice2twwen = this.tweens.add({
                                targets: dice2,
                                delay : 1000,
                                props: {
                                    x: { value: '350', duration: 2000, ease: 'Power1' },
                                    y: { value: '430', duration: 2000, ease: 'Power1' }
                                },

                            });
                            dicecount +=1;
                        }
                        else if (dicecount == 2) {
                            var dicetwwen = this.tweens.add({
                                targets: dice,
                                delay : 1000,
                                props: {
                                    x: { value: '150', duration: 2000, ease: 'Power1' },
                                    y: { value: '450', duration: 2000, ease: 'Power1' }
                                },

                            });
                            var dice2twwen = this.tweens.add({
                                targets: dice2,
                                delay : 1000,
                                props: {
                                    x: { value: '300', duration: 2000, ease: 'Power1' },
                                    y: { value: '400', duration: 2000, ease: 'Power1' }
                                },

                            });
                            dicecount +=1;
                        }
                        else if (dicecount == 3) {
                            var dicetwwen = this.tweens.add({
                                targets: dice,
                                delay : 1000,
                                props: {
                                    x: { value: '100', duration: 2000, ease: 'Power1' },
                                    y: { value: '450', duration: 2000, ease: 'Power1' }
                                },

                            });
                            var dice2twwen = this.tweens.add({
                                targets: dice2,
                                delay : 1000,
                                props: {
                                    x: { value: '250', duration: 2000, ease: 'Power1' },
                                    y: { value: '410', duration: 2000, ease: 'Power1' }
                                },

                            });
                            dicecount = 1;
                        }

                        var rotation = setInterval(function() {
                            dice.rotation += 120;
                            dice2.rotation += 120;
                        }, 100);
                        

                        setTimeout(function(){ 
                           dice.setScale(0);
                           dice2.setScale(0);
                           outputdice.setScale(0.65);
                           outputdice2.setScale(0.65);
                           clearInterval(rotation);
                        }, 3000);

                        

                        var shaketween1 = this.tweens.add({
                            targets :glassimg,
                            angle : 5,
                            ease: 'Linear',
                            duration: 180,
                            repeat: 0,
                            yoyo: false,
                            onComplete:function(){shaketween1.remove(),game.scene.scenes[0].shake1()}
                        });
                    });

            const scorebtn = this.add.sprite(550,100,'scorebg')
                            .setInteractive({ useHandCursor: true })
                            .setScale(0.5)
                            .on('pointerdown', () => { 
                                game.scene.scenes[0].checkscoreflag()
                            } );
            scoreheading.setScale(0);

            scoredescbet1.setScale(0);
            scoredescmult1.setScale(0);
            scoredescgame1.setScale(0);
            scoredescroll1.setScale(0);
            profitimg1.setScale(0);
            scoredescrprofit1.setScale(0);

            scoredescbet2.setScale(0);
            scoredescmult2.setScale(0);
            scoredescgame2.setScale(0);
            scoredescroll2.setScale(0);
            profitimg2.setScale(0);
            scoredescrprofit2.setScale(0);

            scoredescbet3.setScale(0);
            scoredescmult3.setScale(0);
            scoredescgame3.setScale(0);
            scoredescroll3.setScale(0);
            profitimg3.setScale(0);
            scoredescrprofit3.setScale(0);

            scoredescbet4.setScale(0);
            scoredescmult4.setScale(0);
            scoredescgame4.setScale(0);
            scoredescroll4.setScale(0);
            profitimg4.setScale(0);
            scoredescrprofit4.setScale(0);

            scoredescbet5.setScale(0);
            scoredescmult5.setScale(0);
            scoredescgame5.setScale(0);
            scoredescroll5.setScale(0);
            profitimg5.setScale(0);
            scoredescrprofit5.setScale(0);

            scoredescbet6.setScale(0);
            scoredescmult6.setScale(0);
            scoredescgame6.setScale(0);
            scoredescroll6.setScale(0);
            profitimg6.setScale(0);
            scoredescrprofit6.setScale(0);

            scoredescbet7.setScale(0);
            scoredescmult7.setScale(0);
            scoredescgame7.setScale(0);
            scoredescroll7.setScale(0);
            profitimg7.setScale(0);
            scoredescrprofit7.setScale(0);

            scoredescbet8.setScale(0);
            scoredescmult8.setScale(0);
            scoredescgame8.setScale(0);
            scoredescroll8.setScale(0);
            profitimg8.setScale(0);
            scoredescrprofit8.setScale(0);

            scoredescbet9.setScale(0);
            scoredescmult9.setScale(0);
            scoredescgame9.setScale(0);
            scoredescroll9.setScale(0);
            profitimg9.setScale(0);
            scoredescrprofit9.setScale(0);

            scoredescbet10.setScale(0);
            scoredescmult10.setScale(0);
            scoredescgame10.setScale(0);
            scoredescroll10.setScale(0);
            profitimg10.setScale(0);
            scoredescrprofit10.setScale(0);
        




    }

    

        
    }

    update(){
        if (betnumber>11) {
            upbutton.input.enabled = false;
            upbutton.setAlpha(0.7);
        }
        else if (betnumber < 3){
            downbutton.input.enabled = false;
            downbutton.setAlpha(0.7);
        }
        else {
            upbutton.input.enabled = true;
            downbutton.input.enabled = true;
            downbutton.setAlpha(1);
            upbutton.setAlpha(1);
        }

        if (betamount <= 1) {
            minusbtn.input.enabled = false;
            minbtn.input.enabled = false;
            minusbtn.setAlpha(0.7);
            minbtn.setAlpha(0.7);
        }
        else if (betamount >= 100) {
            plusbtn.input.enabled = false;
            maxbtn.input.enabled = false;
            plusbtn.setAlpha(0.7);
            maxbtn.setAlpha(0.7);
        }
        else {
            minusbtn.input.enabled = true;
            minbtn.input.enabled = true;
            minusbtn.setAlpha(1);
            minbtn.setAlpha(1);

            plusbtn.input.enabled = true;
            maxbtn.input.enabled = true;
            plusbtn.setAlpha(1);
            maxbtn.setAlpha(1);
        }

    }
    checkscoreflag(){
        if( sccorebtnflg == "false"){
            scoreheading.setScale(0);

            scoredescbet1.setScale(0);
            scoredescmult1.setScale(0);
            scoredescgame1.setScale(0);
            scoredescroll1.setScale(0);
            profitimg1.setScale(0);
            scoredescrprofit1.setScale(0);

            scoredescbet2.setScale(0);
            scoredescmult2.setScale(0);
            scoredescgame2.setScale(0);
            scoredescroll2.setScale(0);
            profitimg2.setScale(0);
            scoredescrprofit2.setScale(0);

            scoredescbet3.setScale(0);
            scoredescmult3.setScale(0);
            scoredescgame3.setScale(0);
            scoredescroll3.setScale(0);
            profitimg3.setScale(0);
            scoredescrprofit3.setScale(0);

            scoredescbet4.setScale(0);
            scoredescmult4.setScale(0);
            scoredescgame4.setScale(0);
            scoredescroll4.setScale(0);
            profitimg4.setScale(0);
            scoredescrprofit4.setScale(0);

            scoredescbet5.setScale(0);
            scoredescmult5.setScale(0);
            scoredescgame5.setScale(0);
            scoredescroll5.setScale(0);
            profitimg5.setScale(0);
            scoredescrprofit5.setScale(0);

             scoredescbet6.setScale(0);
            scoredescmult6.setScale(0);
            scoredescgame6.setScale(0);
            scoredescroll6.setScale(0);
            profitimg6.setScale(0);
            scoredescrprofit6.setScale(0);

            scoredescbet7.setScale(0);
            scoredescmult7.setScale(0);
            scoredescgame7.setScale(0);
            scoredescroll7.setScale(0);
            profitimg7.setScale(0);
            scoredescrprofit7.setScale(0);

            scoredescbet8.setScale(0);
            scoredescmult8.setScale(0);
            scoredescgame8.setScale(0);
            scoredescroll8.setScale(0);
            profitimg8.setScale(0);
            scoredescrprofit8.setScale(0);

            scoredescbet9.setScale(0);
            scoredescmult9.setScale(0);
            scoredescgame9.setScale(0);
            scoredescroll9.setScale(0);
            profitimg9.setScale(0);
            scoredescrprofit9.setScale(0);

            scoredescbet10.setScale(0);
            scoredescmult10.setScale(0);
            scoredescgame10.setScale(0);
            scoredescroll10.setScale(0);
            profitimg10.setScale(0);
            scoredescrprofit10.setScale(0);

            sccorebtnflg = "true";
            popupbg.setScale(0);

            closebuttn.setScale(0);
        }
        else if (sccorebtnflg == "true") {
            scoreheading.setScale(1);

            scoredescbet1.setScale(1);
            scoredescmult1.setScale(1);
            scoredescgame1.setScale(1);
            scoredescroll1.setScale(1);
            profitimg1.setScale(1);
            scoredescrprofit1.setScale(1);

            scoredescbet2.setScale(1);
            scoredescmult2.setScale(1);
            scoredescgame2.setScale(1);
            scoredescroll2.setScale(1);
            profitimg2.setScale(1);
            scoredescrprofit2.setScale(1);

            scoredescbet3.setScale(1);
            scoredescmult3.setScale(1);
            scoredescgame3.setScale(1);
            scoredescroll3.setScale(1);
            profitimg3.setScale(1);
            scoredescrprofit3.setScale(1);

            scoredescbet4.setScale(1);
            scoredescmult4.setScale(1);
            scoredescgame4.setScale(1);
            scoredescroll4.setScale(1);
            profitimg4.setScale(1);
            scoredescrprofit4.setScale(1);

            scoredescbet5.setScale(1);
            scoredescmult5.setScale(1);
            scoredescgame5.setScale(1);
            scoredescroll5.setScale(1);
            profitimg5.setScale(1);
            scoredescrprofit5.setScale(1);

             scoredescbet6.setScale(1);
            scoredescmult6.setScale(1);
            scoredescgame6.setScale(1);
            scoredescroll6.setScale(1);
            profitimg6.setScale(1);
            scoredescrprofit6.setScale(1);

            scoredescbet7.setScale(1);
            scoredescmult7.setScale(1);
            scoredescgame7.setScale(1);
            scoredescroll7.setScale(1);
            profitimg7.setScale(1);
            scoredescrprofit7.setScale(1);

            scoredescbet8.setScale(1);
            scoredescmult8.setScale(1);
            scoredescgame8.setScale(1);
            scoredescroll8.setScale(1);
            profitimg8.setScale(1);
            scoredescrprofit8.setScale(1);

            scoredescbet9.setScale(1);
            scoredescmult9.setScale(1);
            scoredescgame9.setScale(1);
            scoredescroll9.setScale(1);
            profitimg9.setScale(1);
            scoredescrprofit9.setScale(1);

            scoredescbet10.setScale(1);
            scoredescmult10.setScale(1);
            scoredescgame10.setScale(1);
            scoredescroll10.setScale(1);
            profitimg10.setScale(1);
            scoredescrprofit10.setScale(1);
            sccorebtnflg = "false";
            popupbg.setScale(1.25);
            closebuttn.setScale(1.3);
        }
    }
    shake1(){
         var shaketween2 = this.tweens.add({
            targets :glassimg,
            angle : -15,
            ease: 'Linear',
            duration: 180,
            repeat: 0,
            yoyo: false,
            onComplete:function(){shaketween2.remove(),game.scene.scenes[0].shake2()}
        });
    }
    shake2(){
         var shaketween3 = this.tweens.add({
            targets :glassimg,
            angle : 5,
            ease: 'Linear',
            duration: 180,
            repeat: 0,
            yoyo: false,
            onComplete:function(){shaketween3.remove(),game.scene.scenes[0].shake3()}
        });
    }
    shake3(){
         var shaketween4 = this.tweens.add({
            targets :glassimg,
            angle : -15,
            ease: 'Linear',
            duration: 180,
            repeat: 0,
            yoyo: false,
        });
    }
    
}